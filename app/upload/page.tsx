"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
{
    /*here thew cld widget expects a funcgion as its child rather than any otyher thing*/
}
interface CloudinaryResult {
    public_id: string;
}

const Uploadpage = () => {
    const [publicId, setpublicId] = useState("");
    return (
        <>
            {publicId && (
                <CldImage
                    src={publicId}
                    width={270}
                    height={180}
                    alt="uploadedimage"
                ></CldImage>
            )}
            <div>Uploadpage</div>
            <CldUploadWidget
                options={{
                    sources: ['local', 'url', 'google_drive', 'dropbox'],
                    multiple: false,
                    styles: {
                        palette: {
                            window: "#000000",
                            sourceBg: "#000000",
                            windowBorder: "#ABCEF5",
                            tabIcon: "#08C0FF",
                            inactiveTabIcon: "#8E9FBF",
                            menuIcons: "#2AD9FF",
                            link: "#08C0FF",
                            action: "#336BFF",
                            inProgress: "#00BFFF",
                            complete: "#33ff00",
                            error: "#EA2727",
                            textDark: "#000000",
                            textLight: "#F0FFFF"
                        }
                    }
                }}
                uploadPreset="eipyhyqb"
                onUpload={(result, widget) => {
                    if (result.event != "success") return;
                    const info = result.info as CloudinaryResult;
                    setpublicId(info.public_id);
                }}
            >
                {({ open }) => (
                    <button className="btn btn-primary" onClick={() => open()}>
                        Upload{" "}
                    </button>
                )}
            </CldUploadWidget>
        </>
    );
};

export default Uploadpage;
