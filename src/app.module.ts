import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contacts/contact.entity';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'PGWfzLu54nJsd8',
      database: 'agenda',
      entities: [Contact],
      synchronize: true,
    }),
    ContactsModule,
  ],
})
export class AppModule {}
