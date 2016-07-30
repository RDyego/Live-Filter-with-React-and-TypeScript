import { IEntity } from './../dataSource';

export interface IItem extends IEntity {
    key: string;
    title: string;
    author: string;
    status?: string;
    requester: string;
    image: string;
}
