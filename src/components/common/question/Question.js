import { Checkbox, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Question(props) {
    const id = props.id;
    const quizType = props.quizType;
    const answerList = props.answerList;
    const arrAnswerList = JSON.parse(answerList);
    const keyList = props.keyList;
    const arrKeyList = JSON.parse(keyList);

    // Khởi tạo state để lưu trữ trạng thái của các checkbox
    const [checkedList, setCheckedList] = useState(
        Array(arrAnswerList.length).fill(false)
    );
    // Cách 1:
    // isCorrect sẽ kiểm tra số lượng giá trị True với số lượng key
    // Trong biểu thức thứ 2, sẽ trả về false nếu tồn tại 1 đáp án không được chọn, mà đáp án này lại thuộc vào danh sách đáp án chính xác
    const isCorrect = arrKeyList.length === checkedList.filter(checked => checked).length
        && checkedList.every((checked, index) => checked || !arrKeyList.includes(arrAnswerList[index]));
    // Cách 2:
    // Kiểm tra isCorrect, đầu tiên ta kiểm tra số giá trị True trong checkedList với số lượng đáp án
    // const isCorrect = arrKeyList.length === checkedList.filter(checked => checked).length
    //     && checkedList.every((checked, index) => {
    //         // Nếu đáp án tại vị trí index được chọn kiểm tra xem nó thuộc danh sách đáp án hay không
    //         if (checked) {
    //             if (arrKeyList.includes(arrAnswerList[index])) {
    //                 return true;
    //             }
    //             else {
    //                 return false;
    //             }
    //         }
    //         // Nếu đáp án tại vị trí index không được chọn, kiểm tra xem nếu nó cũng không thuộc danh sách đáp án thì trả về true
    //         else {
    //             if (!arrKeyList.includes(arrAnswerList[index])) {
    //                 return true;
    //             }
    //             else {
    //                 return false;
    //             }
    //         }
    //     });

    useEffect(() => {
        console.log(isCorrect);
    }, [isCorrect])

    // Hàm xử lý khi checkbox thay đổi trạng thái
    const handleCheckboxChange = async (index) => {
        const newCheckedList = [...checkedList];
        newCheckedList[index] = !newCheckedList[index];
        await setCheckedList(newCheckedList);
    };

    return (
        <div>
            <Grid container sx={{ marginTop: '20px' }}>
                {/* Đề bài */}
                <Grid item xs={12} sx={{ paddingLeft: '20px' }}>
                    <strong>ID: {id}</strong>
                </Grid>
                <Grid container sx={{ paddingTop: '10px' }}>
                    {/* Hiển thị danh sách đáp án */}
                    {quizType === "multiple_choice" && (
                        <Grid container>
                            {arrAnswerList.map((answer, index) => (
                                <Grid item xs={12} key={index} sx={{ paddingTop: '10px' }}>
                                    <Checkbox
                                        checked={checkedList[index]}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    {answer}
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </div>
    )
}