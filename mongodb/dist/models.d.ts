import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    name: string;
    age?: number | null;
    email?: string | null;
    role?: "user" | "admin" | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    age?: number | null;
    email?: string | null;
    role?: "user" | "admin" | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    age?: number | null;
    email?: string | null;
    role?: "user" | "admin" | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    age?: number | null;
    email?: string | null;
    role?: "user" | "admin" | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    age?: number | null;
    email?: string | null;
    role?: "user" | "admin" | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    name: string;
    age?: number | null;
    email?: string | null;
    role?: "user" | "admin" | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        age?: number | null;
        email?: string | null;
        role?: "user" | "admin" | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        name: string;
        age?: number | null;
        email?: string | null;
        role?: "user" | "admin" | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    age?: number | null;
    email?: string | null;
    role?: "user" | "admin" | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    age?: number | null;
    email?: string | null;
    role?: "user" | "admin" | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Order: mongoose.Model<{
    user: mongoose.Types.ObjectId;
    item: mongoose.Types.DocumentArray<{
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, {}, {}> & {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    total?: number | null;
    status?: "pending" | "completed" | "cancelled" | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    user: mongoose.Types.ObjectId;
    item: mongoose.Types.DocumentArray<{
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, {}, {}> & {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    total?: number | null;
    status?: "pending" | "completed" | "cancelled" | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    user: mongoose.Types.ObjectId;
    item: mongoose.Types.DocumentArray<{
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, {}, {}> & {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    total?: number | null;
    status?: "pending" | "completed" | "cancelled" | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    user: mongoose.Types.ObjectId;
    item: mongoose.Types.DocumentArray<{
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, {}, {}> & {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    total?: number | null;
    status?: "pending" | "completed" | "cancelled" | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    user: mongoose.Types.ObjectId;
    item: mongoose.Types.DocumentArray<{
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, {}, {}> & {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    total?: number | null;
    status?: "pending" | "completed" | "cancelled" | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    user: mongoose.Types.ObjectId;
    item: mongoose.Types.DocumentArray<{
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, {}, {}> & {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    total?: number | null;
    status?: "pending" | "completed" | "cancelled" | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        user: mongoose.Types.ObjectId;
        item: mongoose.Types.DocumentArray<{
            productName?: string | null;
            quantity?: number | null;
            price?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            productName?: string | null;
            quantity?: number | null;
            price?: number | null;
        }, {}, {}> & {
            productName?: string | null;
            quantity?: number | null;
            price?: number | null;
        }>;
        total?: number | null;
        status?: "pending" | "completed" | "cancelled" | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        user: mongoose.Types.ObjectId;
        item: mongoose.Types.DocumentArray<{
            productName?: string | null;
            quantity?: number | null;
            price?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            productName?: string | null;
            quantity?: number | null;
            price?: number | null;
        }, {}, {}> & {
            productName?: string | null;
            quantity?: number | null;
            price?: number | null;
        }>;
        total?: number | null;
        status?: "pending" | "completed" | "cancelled" | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    user: mongoose.Types.ObjectId;
    item: mongoose.Types.DocumentArray<{
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, {}, {}> & {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    total?: number | null;
    status?: "pending" | "completed" | "cancelled" | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    user: mongoose.Types.ObjectId;
    item: mongoose.Types.DocumentArray<{
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, {}, {}> & {
        productName?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    total?: number | null;
    status?: "pending" | "completed" | "cancelled" | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=models.d.ts.map