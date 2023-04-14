import type { Comment } from "./Comment";

export interface CommentList {
    comments: Comment[];
    total:    number;
    skip:     number;
    limit:    number;
}