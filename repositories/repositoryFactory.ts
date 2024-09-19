import UserRepository from "~/repositories/UserRepository";
import AuthRepository from "~/repositories/AuthRepository";
import PostsRepository from "~/repositories/PostsRepository";

const repositories: Record<string, any> = {
    'Post': PostsRepository,
    'Auth': AuthRepository,
    'User': UserRepository,
}
export default {
    get: (name: keyof typeof repositories) => repositories[name]
};
