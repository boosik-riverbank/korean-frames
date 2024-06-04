import {Button} from "frames.js/core";
import {frames} from "./frames";
import OpenAI from "openai";
import {NEXT_PUBLIC_URL} from "@/app/config";

const handleRequest = frames(async (ctx) => {
    const inputText = ctx.message?.inputText;
    const openai = new OpenAI();

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [{ role: 'user', content: `Translate "${inputText}" to Korean, Please say only korean result` }],
        model: 'gpt-3.5-turbo',
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
    const result = chatCompletion.choices[0].message.content;
    const encode = encodeURIComponent(result?.replaceAll(' ', '+') || '')
    return {
        image: (
            <span>{result}</span>
        ),
        imageOptions: {
            aspectRatio: "1:1",
        },
        buttons: [
            <Button
                key="share_button"
                action="link"
                target={`https://warpcast.com/~/compose?embeds[]=${NEXT_PUBLIC_URL}/korean/${encode}&text=What is "${inputText}" to korean?`}
            >
                Share
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
