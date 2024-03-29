import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as XLSX from 'xlsx';
import { uploadFile } from '../features/tableSlice';

const Details = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [showTable, setShowTable] = useState(false);
    const tableData = useSelector(state => state.file.fileData);
    const dispatch = useDispatch();
    const fileChangeHandler = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const uploadBtnHandler = () => {
        if (!selectedFile) return;
        // Check if the file is in Excel format
        if (selectedFile.name.endsWith('.xlsx') || selectedFile.name.endsWith('.xls')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet);
                dispatch(uploadFile(jsonData));
            };
            reader.readAsArrayBuffer(selectedFile);
        } else {
            alert('Please upload an Excel file.');
        }
    };

    const showBtnHandler = () => {
        setShowTable((state) => !state);
    };

    return (
        <div className="home">
            {/* <nav className="nav">
                <h3>Home</h3>
                <button onClick={logoutBtnHandler} className="logout">logout</button>
            </nav> */}
            <div className="heading">
                <h2>Plesae Upload a file </h2>
            </div>
            <div className="uploadSec my-3">
                <input onChange={fileChangeHandler} type="file" /> 
                <button onClick={uploadBtnHandler}>Upload</button>
            </div>

            <button onClick={showBtnHandler}>{showTable ? 'Hide Table' : 'Show Table'}</button>
            <div className="table" style={{ display: showTable ? 'block' : 'none' }}>
                {tableData && tableData.length > 0 ? (
                    <table border={1}>
                        <thead>
                            <tr>
                                {Object.keys(tableData[0]).map((key) => <th key={key}>{key}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, idx) => (
                                <tr key={idx}>
                                    {Object.values(data).map((elm, idx) => (
                                        <td key={idx}>{elm}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : <p>No table data. Please upload an Excel file.</p>}
            </div>
        </div>
    );
};

export default Details;
