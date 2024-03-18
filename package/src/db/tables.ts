import { defineTable, column, NOW } from 'astro:db';

export const Session = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		userId: column.number({ references: () => User.columns.id }),
		expiresAt: column.number(),
	},
});

export const User = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		url: column.text({ optional: true }),
		name: column.text(),
		email: column.text({ unique: true, optional: true }),
		avatar: column.text({ optional: true }),
		githubId: column.number({ unique: true }),
		githubURL: column.text({ optional: true }),
		username: column.text(),
		updatedAt: column.date({ default: NOW, nullable: true }),
		createdAt: column.date({ default: NOW, nullable: true }),
	},
});

export const Blog = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		description: column.text(),
		slug: column.text(),
		publishedAt: column.date({ default: NOW }),
		updatedAt: column.date({ optional: true }),
		heroImage: column.text({
			default: 'https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		}),
		content: column.text({ multiline: true }),
	},
});

export const Pages = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		description: column.text(),
		publishedAt: column.date({ default: NOW }),
		slug: column.text(),
		heroImage: column.text({
			default: 'https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		}),
		content: column.text({ multiline: true }),
	},
});