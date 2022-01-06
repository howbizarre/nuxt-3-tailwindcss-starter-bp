import type { IncomingMessage, ServerResponse } from "http";

export default async (req: IncomingMessage, res: ServerResponse) => {
    let m = {
        "z": "isZ",
        "g": "isG",
    };

    res.statusCode = 200;
    res.end(JSON.stringify(m));
};
