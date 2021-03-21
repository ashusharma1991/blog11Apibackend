import * as mongoose from 'mongoose';

export interface Add extends mongoose.Document {
    _id: string;
    title: string;
    text: string;
    url: string;
    imageUrl: string;
    order: number;
};

// export interface Add {
//     _id: string;
//     title: string;
//     text: string;
//     url: string;
//     imageUrl: string;
//     order: number;
// }