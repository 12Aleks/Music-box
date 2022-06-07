import React, {FC, useRef} from 'react';

interface IFileUpload {
    setFile: Function,
    accept: string,
    children?: React.ReactNode
}

const FileUpload: FC<IFileUpload> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0])
    };

    return (
        <div onClick={() => ref.current.click()}>
            <input
                type="file"
                accept={accept}
                style={{display: "none"}}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload;