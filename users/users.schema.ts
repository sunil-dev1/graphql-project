import { Field, ObjectType, InputType } from "type-graphql"
import { buildSchema } from "graphql";
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class User {
    @Field()
    id!: number
    @Field()
    email!: string
    @Field()
    name!: string
}

@InputType()
export class UserInput implements Pick<User, "email" | "name"> {
    @Field()
    @IsNotEmpty()
    email!: string;

    @Field()
    @IsNotEmpty()
    name!: string;
}


buildSchema(`
    type User {
        id: Int!
        name: String!
        email: String!
    }

    input UserInput {
        email: String!
        name: String!
    }
`)


