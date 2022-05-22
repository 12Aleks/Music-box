import React, {FC} from 'react';

interface IFileUpload {
    file: any;
    setFile: Function;
    accept: string

}

const FileUpload: FC<IFileUpload> = ({file, setFile, accept}) => {
    return (
        <div>
            <input type="file"/>
        </div>
    );
};

export default FileUpload;