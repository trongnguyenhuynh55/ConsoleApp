import { question } from "readline-sync";
import { arr, arrCourse} from "./main";


const checkID = (x: string): string => {
    while (Number(x) <= 0 || Number(x) > 999 || isNaN(Number(x)) == true) {
        console.log("Du lieu ban nhap sai!")
        x = question("Moi ban nhap ID dung (ID bao gom 3 chu so hop le): ")
    } 
    
    let result: string = "";
    if (Number(x) < 10)
        result = "00" + String(Number(x));
    else if (Number(x) < 100)
        result = "0" + String(Number(x));
    else
        result = x;
    return result
}

const checkText = (x: string):string => {
    while (x == "") {
        console.log("Du lieu ban nhap sai!")
        x = question("Moi ban nhap du lieu hop le: ")
    }
    return x
}

const checkDate = (x: string): string => {
    let flag: boolean = true;
    let count: number = 0;
    for(let i: number = 0; i < x.length; i++) {
        if (x[i] == "/")
            count++;
    }
    if (count == 2  )
        flag = true
    else 
        flag = false

    let arrayDate: string[] = x.split("/")
    if (Number(arrayDate[2]) < 1900 || Number(arrayDate[2]) > 2023 || Number(arrayDate[1]) < 0 || Number(arrayDate[1]) > 12 || Number(arrayDate[0]) < 0)
        flag = false
    else
        if (Number(arrayDate[1]) == 1 || Number(arrayDate[1]) == 3 || Number(arrayDate[1]) == 5 || Number(arrayDate[1]) == 7 || Number(arrayDate[1]) == 8 || Number(arrayDate[1]) == 10 || Number(arrayDate[1]) == 12)
            if (Number(arrayDate[0]) > 31)
                flag = false;
        else if (Number(arrayDate[1]) == 4 || Number(arrayDate[1]) == 6 || Number(arrayDate[1]) == 9 || Number(arrayDate[1]) == 11)
            if (Number(arrayDate[0]) > 30)
                flag = false;
        else 
            if (Number(arrayDate[1]) == 2)
                if ((Number(arrayDate[2]) % 100 == 0 && Number(arrayDate[2]) % 400 == 0) || (Number(arrayDate[2]) % 100 != 0 && Number(arrayDate[2]) % 4 == 0))
                    if (Number(arrayDate[0]) > 29)
                        flag = false;
                else 
                    if (Number(arrayDate[0]) > 28)
                        flag = false
            else    
                flag = false

    while (flag == false) {
        console.log("Du lieu ban nhap sai!")
        x = question("Moi ban nhap nam sinh hop le: ")
        for(let i: number = 0; i < x.length; i++) {
            if (x[i] == "/")
                count++;
        }
        if (count == 2)
            flag = true
        else 
            flag = false
        let arrayDate: string[] = x.split("/")
        if (Number(arrayDate[2]) < 1900 || Number(arrayDate[2]) > 2023 || Number(arrayDate[1]) < 0 || Number(arrayDate[1]) > 12 || Number(arrayDate[0]) < 0)
            flag = false
        else
            if (Number(arrayDate[1]) == 1 || Number(arrayDate[1]) == 3 || Number(arrayDate[1]) == 5 || Number(arrayDate[1]) == 7 || Number(arrayDate[1]) == 8 || Number(arrayDate[1]) == 10 || Number(arrayDate[1]) == 12)
                if (Number(arrayDate[0]) > 31)
                    flag = false;
                else
                    flag = true
            else if(Number(arrayDate[1]) == 4 || Number(arrayDate[1]) == 6 || Number(arrayDate[1]) == 9 || Number(arrayDate[1]) == 11)
                if (Number(arrayDate[0]) > 30)
                    flag = false;
                else
                    flag = true
            else 
                if (Number(arrayDate[1]) == 2)
                    if ((Number(arrayDate[2]) % 100 == 0 && Number(arrayDate[2]) % 400 == 0) || (Number(arrayDate[2]) % 100 != 0 && Number(arrayDate[2]) % 4 == 0))
                        if (Number(arrayDate[0]) > 29)
                            flag = false;
                        else
                            flag = true
                    else 
                        if (Number(arrayDate[0]) > 28)
                            flag = false
                        else
                            flag = true
                else 
                    flag = false
        }
    if (Number(arrayDate[0]) < 10)
        arrayDate[0] = "0" + arrayDate[0]
    if (Number(arrayDate[1]) < 10)
        arrayDate[1] = "0" + arrayDate[1]
    return arrayDate[0] + "/" + arrayDate[1] + "/" + arrayDate[2]
}

const checkGender = (x: string): string => {
    while(x.toLowerCase() != "nam" && x.toLowerCase() != "nu") {
        console.log("Gioi tnh ban nhap sai")
        x = question("Moi ban nhap lai gioi tinh nhe: ")
    }
    return x.charAt(0).toUpperCase() + x.toLowerCase().slice(1)
}

const checkEmail = (x: string): string => {
    let count: number = 0;
    for(let i: number = 0; i < x.length; i++) {
        if (x[i] == "@")
            count++;
    }
    while (count != 1 || x.charAt(0) == "@" || x.charAt(x.length - 1) == "@") {
        console.log("Email ban nhap sai!")
        x = question("Moi ban nhap lai email dung nhe: ")
        count = 0;
        for(let i: number = 0; i < x.length; i++) {
            if (x[i] == "@")
                count++;
        }
    }
    return x
}

const checkPhoneNumber = (x: string): string => {
    let flag: boolean = true;
    for(let i: number = 0; i < x.length; i++) 
        if (isNaN(Number(x)) == true) {
            flag = false;
            break
        }
    while(flag == false || x.length < 10 || x.length > 11) {
        console.log("So dien thoai ban nhap sai! ")
        x = question("Moi ban nhap so dien thoai dung: ")
        flag = true;
        for(let i: number = 0; i < x.length; i++) 
        if (isNaN(Number(x)) == true) {
            flag = false;
            break
        }
    }
    return x
}

const checkIDCourse = (x: string): string => {
    let flag: boolean = true;
    for (let i: number = 0; i < arrCourse.length; i++)
        if (Number(x) != Number(arrCourse[i].IDCourse))
            flag = false;
        else {
            flag = true;
            break
        }

        
    while (Number(x) <= 0 || Number(x) > 99 || isNaN(Number(x)) == true || flag == false) {
        console.log("Du lieu ban nhap sai!")
        x = question("Moi ban nhap ID dung (ID bao gom 2 chu so hop le): ")
        flag = true;
        for (let i: number = 0; i < arrCourse.length; i++)
        if (Number(x) != Number(arrCourse[i].IDCourse))
            flag = false;
        else {
            flag = true;
            break;
        }
        
    } 
    
    let result: string = "";
    if (Number(x) < 10)
        result = "0" + String(Number(x));
    else
        result = x;
    return result
}

const checkNumlession = (id: string, x: number): number => {
    let flag: boolean = true;
    for (let i: number = 1; i < arrCourse.length; i++)
        if (id == arrCourse[i].IDCourse)
            if (x > arrCourse[i].TotalLesson) {
                flag = false;
                break
            }
            else {
                flag = true;
                break
            }

    while (x < 0 || flag == false) {
        console.log("Du lieu ban nhap sai!")
        x = Number(question("Moi ban nhap ID dung (ID bao gom 2 chu so hop le): "))
        flag = true;
        for (let i: number = 1; i < arrCourse.length; i++)
        if (id == arrCourse[i].IDCourse && x > arrCourse[i].TotalLesson)
            flag = false;
        else
            flag = true;
    }
    return x
}

const checkMark = (x: number): number => {
    while(x < 0 || x > 10) {
        console.log("So diem ban nhap sai!")
        x = Number(question("Moi ban nhap so diem dung" ))
    }
    return x
}

const checkNumber = (x: number): number => {
    while(x < 0) {
        console.log("So diem ban nhap sai!")
        x = Number(question("Moi ban nhap so diem dung" ))
    }
    return x
}

export {checkID, checkText, checkDate, checkGender, checkEmail, checkPhoneNumber, checkIDCourse, checkNumlession, checkMark, checkNumber}