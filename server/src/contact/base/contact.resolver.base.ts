/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateContactArgs } from "./CreateContactArgs";
import { UpdateContactArgs } from "./UpdateContactArgs";
import { DeleteContactArgs } from "./DeleteContactArgs";
import { ContactFindManyArgs } from "./ContactFindManyArgs";
import { ContactFindUniqueArgs } from "./ContactFindUniqueArgs";
import { Contact } from "./Contact";
import { NewsItemFindManyArgs } from "../../newsItem/base/NewsItemFindManyArgs";
import { NewsItem } from "../../newsItem/base/NewsItem";
import { ContactService } from "../contact.service";

@graphql.Resolver(() => Contact)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ContactResolverBase {
  constructor(
    protected readonly service: ContactService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async _contactsMeta(
    @graphql.Args() args: ContactFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Contact])
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async contacts(
    @graphql.Args() args: ContactFindManyArgs
  ): Promise<Contact[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Contact, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "own",
  })
  async contact(
    @graphql.Args() args: ContactFindUniqueArgs
  ): Promise<Contact | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Contact)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "create",
    possession: "any",
  })
  async createContact(
    @graphql.Args() args: CreateContactArgs
  ): Promise<Contact> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Contact)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateContact(
    @graphql.Args() args: UpdateContactArgs
  ): Promise<Contact | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Contact)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "delete",
    possession: "any",
  })
  async deleteContact(
    @graphql.Args() args: DeleteContactArgs
  ): Promise<Contact | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [NewsItem])
  @nestAccessControl.UseRoles({
    resource: "NewsItem",
    action: "read",
    possession: "any",
  })
  async lastUsed(
    @graphql.Parent() parent: Contact,
    @graphql.Args() args: NewsItemFindManyArgs
  ): Promise<NewsItem[]> {
    const results = await this.service.findLastUsed(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
