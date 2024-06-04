import {Button} from "frames.js/core";
import {frames} from "./frames";

const handleRequest = frames(async (ctx) => {
    const page = Number(ctx.searchParams?.pageIndex ?? 0);
    const currentState = ctx.state;

    return {
        image: (
            <span>Say something, it will be translated Korean!</span>
        ),
        imageOptions: {
            aspectRatio: "1:1",
        },
        textInput: "Say something!",
        buttons: [
            <Button
                key="next_button"
                action="post"
                target={`/korean`}
            >
                Translate to korean!
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
