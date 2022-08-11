/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Contact, NewsItem } from "@prisma/client";

export class ContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ContactFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFindManyArgs>
  ): Promise<number> {
    return this.prisma.contact.count(args);
  }

  async findMany<T extends Prisma.ContactFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFindManyArgs>
  ): Promise<Contact[]> {
    return this.prisma.contact.findMany(args);
  }
  async findOne<T extends Prisma.ContactFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactFindUniqueArgs>
  ): Promise<Contact | null> {
    return this.prisma.contact.findUnique(args);
  }
  async create<T extends Prisma.ContactCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactCreateArgs>
  ): Promise<Contact> {
    return this.prisma.contact.create<T>(args);
  }
  async update<T extends Prisma.ContactUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactUpdateArgs>
  ): Promise<Contact> {
    return this.prisma.contact.update<T>(args);
  }
  async delete<T extends Prisma.ContactDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactDeleteArgs>
  ): Promise<Contact> {
    return this.prisma.contact.delete(args);
  }

  async findLastUsed(
    parentId: string,
    args: Prisma.NewsItemFindManyArgs
  ): Promise<NewsItem[]> {
    return this.prisma.contact
      .findUnique({
        where: { id: parentId },
      })
      .lastUsed(args);
  }
}
