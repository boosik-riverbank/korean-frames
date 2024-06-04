import {Button} from "frames.js/core";
import {frames} from "./frames";

const handleRequest = frames(async (ctx) => {
    const split = ctx.url.pathname.split("/");
    const decode = decodeURIComponent(split[split.length - 1])
    return {
        image: (
            <>
                <span>{decode.replaceAll('+', ' ').replaceAll('\%2B', ' ')}</span>
            </>
        ),
        imageOptions: {
            aspectRatio: "1:1",
        },
        buttons: [
            <Button
                key="share_button"
                action="post"
                target={"/say"}
            >
                Go to say!
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
