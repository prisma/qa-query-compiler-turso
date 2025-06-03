import 'dotenv/config';
import { defineConfig } from 'prisma/config';
import { adapter } from './src/adapter';
export default defineConfig({
    earlyAccess: true,
    schema: './prisma/schema.prisma',
    migrate: {
        adapter,
    }
});
