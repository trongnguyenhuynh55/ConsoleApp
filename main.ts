import { question } from "readline-sync";
import { checkID, checkText, checkDate, checkGender, checkEmail, checkPhoneNumber, checkIDCourse, checkNumlession, checkMark, checkNumber } from "./check";
// Tạo kiểu cho học sinh và khóa học
class Student {
    ID: string;
    Name: string;
    DateOfBirth: string;
    Gender: string;
    Email: string;
    PhoneNumber: string;
    WorkPlace: string;
    IDCourse: string;
    Numlession: number;
    Mark: number;
    constructor(id: string, name: string, date: string, gender: string, email: string, phoneNumber: string, workPlace: string, 
        idCourse: string, numlession: number, mark: number) {
        this.ID = id;
        this.Name = name;
        this.DateOfBirth = date;
        this.Gender = gender;
        this.Email = email;
        this.PhoneNumber = phoneNumber;
        this.WorkPlace = workPlace;
        this.IDCourse = idCourse;
        this.Numlession = numlession;
        this.Mark = mark;
    }
}
type Course = {
    IDCourse: string;
    NameCourse: string;
    TotalLesson: number;
    OpeningDay: string;
    NameOfInstructor: string;
    Summary: string; 
}
type NameSort = {
    namesort: string;
    group: string;
    sign: number;
}

// Tạo danh sách học sinh và khóa học cố định
let arr: Student[] = [
    {
        ID: "045",
        Name: "Huynh Trong Nguyen",
        DateOfBirth: "05/05/1999",
        Gender: "Nam",
        Email: "trongnguyenhuynh55@gmail.com",
        PhoneNumber: "0981372913",
        WorkPlace: "Truong Hai Thaco",
        IDCourse: "01",
        Numlession: 10,
        Mark: 7,
    },
    {
        ID: "045",
        Name: "Huynh Trong Nguyen",
        DateOfBirth: "05/05/1999",
        Gender: "Nam",
        Email: "trongnguyenhuynh55@gmail.com",
        PhoneNumber: "0981372913",
        WorkPlace: "Truong Hai Thaco",
        IDCourse: "02",
        Numlession: 8,
        Mark: 4,
    }, {
        ID: "026",
        Name: "Nguyen Van An",
        DateOfBirth: "06/06/2000",
        Gender: "Nam",
        Email: "abc@gmail.com",
        PhoneNumber: "0999999993",
        WorkPlace: "Dai Hoc Tai Chinh - Marketing",
        IDCourse: "02",
        Numlession: 6,
        Mark: 9,
    }, {
        ID: "100",
        Name: "Nguyen Thi A",
        DateOfBirth: "01/04/1997",
        Gender: "Nu",
        Email: "abcd@gmail.com",
        PhoneNumber: "0999999923",
        WorkPlace: "Dai Hoc Tai Chinh - Marketing",
        IDCourse: "02",
        Numlession: 9,
        Mark: 9,
    }, {
        ID: "125",
        Name: "Tran An",
        DateOfBirth: "04/12/2001",
        Gender: "Nam",
        Email: "ac@gmail.com",
        PhoneNumber: "0999999998",
        WorkPlace: "Dai Hoc Tai Chinh - Marketing",
        IDCourse: "01",
        Numlession: 9,
        Mark: 10,
    }
];
let arrCourse: Course[] = [
    {
        IDCourse: "01",
        NameCourse: "ABC",
        TotalLesson: 12,
        OpeningDay: "16/03/2023",
        NameOfInstructor: "Vu Dinh Bao",
        Summary: "abc"
    }, {
        IDCourse: "02",
        NameCourse: "XYZ",
        TotalLesson: 10,
        OpeningDay: "20/03/2023",
        NameOfInstructor: "Nguyen Thanh Thu",
        Summary: "xyz"
    }
];

// Hàm main thực thi
function main(): void {
    let result: string = ""
    do {
        console.log("Duoi day la cac chuc nang cua app nhe: ")
        console.log("1. In bang danh sach hoc vien\n2. Loc hoc vien theo tieu chi\n3. Them hoc vien moi\n4. Chinh sua thong tin hoc vien")
        console.log("5. Xoa hoc vien\n6. Danh sach hoc vien thoi hoc\n7. Hoc vien nho tuoi / lon tuoi nhat toi thoi diem dang ky khoa hoc")
        console.log("8. Sap xep hoc vien\n9. In ra danh sach hoc vien cua khoa hoc\n10. Cho biet thu khoa cua khoa hoc\n11.Thong ke xep loai khoa hoc")
        result = question("Moi ban chon phim: ")
        switch (result) {
            case "1": {
                console.table(arr);
                break;
            }
            case "2": {
                console.table(arrClone())
                break;
            }
            case "3": {
                arr.push(call());
                break;
            }
            case "4": {
                edit();
                break;
            }
            case "5": {
                deleteStudent();
                break;
            }
            case "6": {
                console.log(quitSchool());
                break;
            }
            case "7": {
                console.log(age());
                break;
            }
            case "8": {
                sort()
                break
            }
            case "9": {
                printlist()
                break
            }
            case "10": {
                valedictorian()
                break
            }
            case "11": {
                statistical()
                break
            }
            default: {
                console.log("Ban chon chuc nang chưa phu hop")
            }
        }
        result = question("Ban co muon lam them khong (y/n): ")
    } while(result == "y")
    
}
main()


function arrClone(): Student[] {
    let arrClone: Student[] = [];
    let result: string = ""
    do {
        console.log("Moi ban loc theo chuc nang sau: ")
        console.log("1. ID\n2. Ten\n3. Gioi tinh\n4. Ngay sinh\n5. Email\n6. So dien thoai\n7. Noi lam viec / hoc tap\n8. ID lop hoc\n9. So buoi da hoc\n10. Diem tong ket")
        let result: string = question("Moi ban cho phim muon loc: ")
        switch (result) {
            case "1": {
                let clonedArray: Student[] = Array.from(arr)
                let x: string = checkID(question("Nhap ID: "))
                let count: number = -1;
                for(let i: number = 0; i < clonedArray.length; i++) {
                    if (Number(x) == Number(clonedArray[i].ID)) {
                        count++;
                        arrClone[count] = clonedArray[i];
                    }
                }
                break;
            }
            case "2": {
                let clonedArray: Student[] = Array.from(arr)
                let x: string = checkText(question("Moi ban nhap ten: "));
                let count: number = -1;
                for(let i: number = 0; i < clonedArray.length; i++) {
                    if (x.toLowerCase() == clonedArray[i].Name.toLowerCase()) {
                        count++;
                        arrClone[count] = clonedArray[i];
                    }
                }
                break;
            }
            case "3": {
                let clonedArray: Student[] = Array.from(arr)
                let x: string = checkGender(question("Moi ban nhap gioi tinh (Nam/Nu): "));
                let count: number = -1;
                for(let i: number = 0; i < clonedArray.length; i++) {
                    if (x.toLowerCase() == clonedArray[i].Gender.toLowerCase()) {
                        count++;
                        arrClone[count] = clonedArray[i];
                    }
                }
                break;
            }
            case "4": {
                let clonedArray: Student[] = Array.from(arr)
                let count: number = -1;
                let x: string = checkDate(question("Ban muon loc tu ngay: "));
                let y: string = checkDate(question("Ban muon loc den ngay: "));
                let flag: boolean = true;
                let arrX: string[] = x.split("/");
                let arrY: string[] = y.split("/");
                if (Number(arrX[2]) > Number(arrY[2]))
                    flag = false;
                else if (Number(arrX[2]) < Number(arrY[2]))
                    flag = true;
                else
                    if(Number(arrX[1]) > Number(arrY[1]))
                        flag = false;
                    else if (Number(arrX[1]) < Number(arrY[1]))
                        flag = true;
                    else
                        if (Number(arrX[0]) > Number(arrY[0]))
                            flag = false
                        else    
                            flag = true
                while(flag == false) {
                    console.log("Du lieu ban nhap sai!")
                    x = checkDate(question("Ban muon loc tu ngay: "));
                    y = checkDate(question("Ban muon loc den ngay: "));
                    flag = true;
                    arrX = x.split("/");
                    arrY = y.split("/");
                    if (Number(arrX[2]) > Number(arrY[2]))
                        flag = false;
                    else if (Number(arrX[2]) < Number(arrY[2]))
                        flag = true;
                    else
                        if(Number(arrX[1]) > Number(arrY[1]))
                            flag = false;
                        else if (Number(arrX[1]) < Number(arrY[1]))
                            flag = true;
                        else
                            if (Number(arrX[0]) > Number(arrY[0]))
                                flag = false
                            else    
                                flag = true
                }

                for(let i: number = 0; i < clonedArray.length; i++) {
                    let arrDate: string[] = clonedArray[i].DateOfBirth.split("/");
                    if (Number(arrX[2]) < Number(arrDate[2]) && Number(arrDate[2]) < Number(arrY[2])) {
                        count++;
                        arrClone[count] = clonedArray[i];
                    }
                    else if(Number(arrX[2]) == Number(arrDate[2]) && Number(arrDate[2]) < Number(arrY[2])){
                        if (Number(arrX[1]) < Number(arrDate[1])) {
                            count++;
                            arrClone[count] = clonedArray[i];
                        }
                        else if(Number(arrX[1]) == Number(arrDate[1])) {
                            if(Number(arrX[0]) <= Number(arrDate[0])) {
                                count++;
                                arrClone[count] = clonedArray[i];
                            }
                        }
                    }
                    else if(Number(arrX[2]) < Number(arrDate[2]) && Number(arrDate[2]) == Number(arrY[2])) {
                        if (Number(arrDate[1]) < Number(arrY[1])) {
                            count++;
                            arrClone[count] = clonedArray[i];
                        }
                        else if(Number(arrDate[1]) == Number(arrY[1])) {
                            if(Number(arrDate[0]) <= Number(arrY[0])) {
                                count++;
                                arrClone[count] = clonedArray[i];
                            }
                        }
                    }
                    else if(Number(arrX[2]) == Number(arrDate[2]) && Number(arrDate[2]) == Number(arrY[2])) {
                        if (Number(arrX[1]) < Number(arrDate[1]) && Number(arrDate[1]) < Number(arrY[1])) {
                            count++;
                            arrClone[count] = clonedArray[i];
                        }
                        else if (Number(arrX[1]) == Number(arrDate[1]) && Number(arrDate[1]) < Number(arrY[1])) {
                            if (Number(arrX[0]) <= Number(arrDate[0])) {
                                count++;
                                arrClone[count] = clonedArray[i];
                            }
                        }
                        else if (Number(arrX[1]) < Number(arrDate[1]) && Number(arrDate[1]) == Number(arrY[1])) {
                            if (Number(arrDate[0]) <= Number(arrY[0])) {
                                count++;
                                arrClone[count] = clonedArray[i];
                            }
                        }
                        else if(Number(arrX[1]) == Number(arrDate[1]) && Number(arrDate[1]) == Number(arrY[1])) {
                            if (Number(arrX[0]) < Number(arrDate[0]) && Number(arrDate[0]) < Number(arrY[0]) ||
                                Number(arrX[0]) == Number(arrDate[0]) && Number(arrDate[0]) < Number(arrY[0]) || 
                                Number(arrX[0]) < Number(arrDate[0]) && Number(arrDate[0]) == Number(arrY[0]) ||
                                Number(arrX[0]) == Number(arrDate[0]) && Number(arrDate[0]) == Number(arrY[0])) {
                                count++;
                                arrClone[count] = clonedArray[i];
                            }
                        }
                    }
                }
                break;
            }
            case "5": {
                let clonedArray: Student[] = Array.from(arr)
                let x: string = checkEmail(question("Moi ban nhap email: "));
                let count: number = -1;
                for(let i: number = 0; i < clonedArray.length; i++) {
                    if (x.toLowerCase() == clonedArray[i].Name.toLowerCase()) {
                        count++;
                        arrClone[count] = clonedArray[i];
                    }
                }
                break;
            }
            case "6": {
                let clonedArray: Student[] = Array.from(arr)
                let x: string = checkPhoneNumber(question("Moi ban nhap so dien thoai: "));
                let count: number = -1;
                for(let i: number = 0; i < clonedArray.length; i++) {
                    if (x == clonedArray[i].Name) {
                        count++;
                        arrClone[count] = clonedArray[i];
                    }
                }
                break;
            }
            case "7": {
                let clonedArray: Student[] = Array.from(arr)
                let x: string = checkText(question("Moi ban nhap noi lam viec / hoc tap: "));
                let count: number = -1;
                for(let i: number = 0; i < clonedArray.length; i++) {
                    if (x.toLowerCase() == clonedArray[i].Name.toLowerCase()) {
                        count++;
                        arrClone[count] = clonedArray[i];
                    }
                }
                break;
            }
            case "8": {
                let clonedArray: Student[] = Array.from(arr)
                let x: string = checkIDCourse(question("Moi ban nhap ID khoa hoc: "));
                let count: number = -1;
                for(let i: number = 0; i < clonedArray.length; i++) {
                    if (Number(x) == Number(clonedArray[i].IDCourse)) {
                        count++;
                        arrClone[count] = clonedArray[i];
                    }
                }
                break;
            }
            case "9": {
                let clonedArray: Student[] = Array.from(arr)
                let count: number = -1
                let x: number = checkNumber(Number(question("So buoi hoc da tham gia tu: ")));
                let y: number = checkNumber(Number(question("So buoi hoc da tham gia den: ")));
                while(x > y) {
                    console.log("Du lieu ban nhap sai")
                    x = checkNumber(Number(question("So buoi hoc da tham gia tu: ")));
                    y = checkNumber(Number(question("So buoi hoc da tham gia den: ")));
                }
                for(let i: number = 0; i < arr.length; i++) {
                    if (x < arr[i].Numlession && arr[i].Numlession < y) {
                        count++;
                        arrClone[count] = clonedArray[i];
                    }
                }
            }
            case "10": {
                let clonedArray: Student[] = Array.from(arr)
                let count: number = -1
                let x: number = checkMark(Number(question("Moi ban nhap diem tu: ")));
                let y: number = checkMark(Number(question("Moi ban nhap diem den: ")));
                while(x > y) {
                    console.log("Du lieu ban nhap sai")
                    x = checkMark(Number(question("Moi ban nhap diem tu: ")));
                    y = checkMark(Number(question("Moi ban nhap diem den: ")));
                }
                for(let i: number = 0; i < arr.length; i++) {
                    if (x < arr[i].Mark && arr[i].Mark < y) {
                        count++;
                        arrClone[count] = clonedArray[i];
                    }
                }
            }
            default: {
                console.log("Ban chon chuc nang chua phu hop")
            }
        }
        result = question("Ban co muon loc them khong (y/n): ")
    } while(result == "y" || result == "Y")
    return arrClone
}

function ID(): string {
    let id: string = question("Moi ban nhap ID hoc vien: ");
    let flag: boolean = true;
    for (let i: number = 0; i < arr.length; i++) {
        if (Number(arr[i].ID) == Number(id)) {
            flag = false;
            break;
        }
    }
    while(flag == false) {
        id = question("Moi ban nhap lai ID (Khong trung voi cac ID da co): ")
        for (let i: number = 0; i < arr.length; i++) {
            if (Number(arr[i].ID) == Number(id)) {
                flag = false;
                break;
            }
            else
                flag = true
        }
    }
    return checkID(id)
}
function call(): Student {

    let id: string = ID();
    const NAME = (): string => checkText(question("Moi ban nhap ten: "));
    let name: string = NAME();
    const DATE = (): string => checkDate(question("Moi ban nhap ngay sinh: "));
    let date: string = DATE();
    const GENDER = (): string => checkGender(question("Moi ban nhap gioi tinh (Nam/Nu): "));
    let gender: string = GENDER();
    const EMAIL = (): string => checkEmail(question("Moi ban nhap email: "));
    let email: string = EMAIL();
    const PHONENUMBER = (): string => checkPhoneNumber(question("Moi ban nhap so dien thoai: "));
    let phoneNumber: string = PHONENUMBER();
    const WORKPLACE = (): string => checkText(question("Moi ban nhap noi lam viec / hoc tap: "));
    let workPlace: string = WORKPLACE();
    const idCourse = (): string => checkIDCourse(question("Moi ban nhap ID khoa hoc: "));
    let IDCOURSE: string = idCourse();
    const NUMLESSION = (): number => checkNumlession(IDCOURSE, Number(question("Moi ban nhap so buoi da hoc: ")));
    let numlession = NUMLESSION();
    const MARK = (): number => checkMark(Number(question("Moi ban nhap diem: ")));
    let mark = MARK()
    
    let student: Student = new Student(id, name, date, gender, email, phoneNumber, workPlace, IDCOURSE, numlession, mark)
    return student;
}

function edit(): void {
    let resulta: string = ""
    do {
        let flag: boolean = false;
        do {
            let result = checkID(question("Moi ban chon ID hoc vien muon chinh sua: "))
            for(let i: number = 0; i < arr.length; i++) 
                if(Number(result) == Number(arr[i].ID)) {
                    flag = true;
                     break;
                }
            if (flag == false)
                console.log("Khong tim thay ID hoc vien, moi ban nhap lai.")
            else {
                console.log("Moi ban edit theo chuc nang sau: ")
                console.log("1. Chinh sua thong tin hoc vien\n2. Chinh sua thong tin khoa hoc cua hoc vien")
                let result1: string = question("Moi ban chon phim muon edit (Cac thay doi khong the hoan lai): ")
                switch(result1) {
                    case "1": {
                        console.log("1. ID\n2. Ten\n3. Ngay sinh\n4. Gioi tinh\n5. Email\n6. So dien thoai\n7. Noi lam viec / hoc tap")
                        let result2 = question("Moi ban cho chuc nang muon chinh sua: ")
                        switch(result2) {
                            case "1": {
                                let result3: string = ID();
                                for(let i: number = 0; i < arr.length; i++) {
                                    if(Number(result) == Number(arr[i].ID)) 
                                        arr[i].ID = result3;
                                }
                                break;
                            }
                            case "2": {
                                let result3: string = checkText(question("Moi ban nhap ten: "));
                                for(let i: number = 0; i < arr.length; i++) {
                                    if(Number(result) == Number(arr[i].Name)) 
                                        arr[i].ID = result3;
                                }
                                break;
                            }
                            case "3": {
                                let result3: string = checkDate(question("Moi ban nhap ngay sinh: "));
                                for(let i: number = 0; i < arr.length; i++) {
                                    if(Number(result) == Number(arr[i].DateOfBirth)) 
                                        arr[i].ID = result3;
                                }
                                break;
                            }
                            case "4": {
                                let result3: string = checkGender(question("Moi ban nhap gioi tinh (Nam/Nu): "));
                                for(let i: number = 0; i < arr.length; i++) {
                                    if(Number(result) == Number(arr[i].Gender)) 
                                        arr[i].ID = result3;
                                }
                                break;
                            }
                            case "5": {
                                let result3: string = checkEmail(question("Moi ban nhap email: "));
                                for(let i: number = 0; i < arr.length; i++) {
                                    if(Number(result) == Number(arr[i].Email)) 
                                        arr[i].ID = result3;
                                }
                                break;
                            }
                            case "6": {
                                let result3: string = checkPhoneNumber(question("Moi ban nhap so dien thoai: "));
                                for(let i: number = 0; i < arr.length; i++) {
                                    if(Number(result) == Number(arr[i].PhoneNumber)) 
                                        arr[i].ID = result3;
                                }
                                break;
                            }
                            case "7": {
                                let result3: string = checkText(question("Moi ban nhap noi lam viec / hoc tap: "));
                                for(let i: number = 0; i < arr.length; i++) {
                                    if(Number(result) == Number(arr[i].WorkPlace)) 
                                        arr[i].ID = result3;
                                }
                                break;
                            }
                            default: {
                                console.log("Chuc nang khong hop le!")
                            }
                        }
                        break;
                    }
                    case "2": {
                        let flag2: boolean = false;
                        do {
                            let result4 = checkID(question("Moi ban chon ID khoa hoc muon chinh sua: "))
                            for(let i: number = 0; i < arr.length; i++) 
                                if(Number(result4) == Number(arr[i].IDCourse)) {
                                    flag = true;
                                    let result5: string = checkIDCourse(question("Moi ban nhap ID khoa hoc: "));
                                    arr[i].IDCourse = result5;
                                    let result6: number = checkNumlession(result5, Number(question("Moi ban nhap so buoi da hoc: ")));
                                    arr[i].Numlession = result6;
                                    result6 = checkMark(Number(question("Moi ban nhap diem: ")));
                                    arr[i].Mark = result6;
                                }
                            if (flag2 == false)
                                console.log("Khong tim thay ID khoa hoc, moi ban nhap lai.")
                        } while (flag2 == false)
                    }
                    default: {
                        console.log("Chuc nang khong hop le!")
                    }
                }
            }
        } while(flag == false)
    resulta = question("Ban co muon sua them khong (y/n): ")
    } while (resulta == "y")
}

function deleteStudent(): void {
    let flag: boolean = false;
    do {
        let result1 = checkID(question("Moi ban chon ID hoc vien muon xoa: "))
        let result2 = checkIDCourse(question("Moi ban chon ID khoa hoc muon xoa: "))
        for(let i: number = 0; i < arr.length; i++) 
            if(Number(result1) == Number(arr[i].ID) && Number(result2) == Number(arr[i].IDCourse)) {
                flag = true;
                arr.splice(i, 1)
                break;
            }
        if (flag == false)
            console.log("Khong tim thay ID hoc vien, ID hoc vien hop le, moi ban nhap lai.")
    } while (flag == false)
}

function quitSchool(): string[] {
    let arrQuit: string[] = [];
    let count: number = -1;
    for(let i: number = 0; i < arr.length; i++) {
        for(let j: number = 0; j < arrCourse.length; j++) {
            if(arrCourse[j].IDCourse == arr[i].IDCourse)
                if((arrCourse[j].TotalLesson - arr[i].Numlession) > 3) {
                    count++;
                    arrQuit[count] = arr[i].Name
                }
        }
    }
    return arrQuit
}

function age(): string[] {
    let result: string[] =  []
    for(let i: number = 0; i < arrCourse.length; i++) {
        let arrID: Student[] = []
        for(let j: number = 0; j < arr.length; j++) {
            if (arrCourse[i].IDCourse == arr[j].IDCourse)
                arrID.push(arr[j])
        }
        let min: Student = arrID[0];
        let max: Student = arrID[0];
        for(let k: number = 1; k < arrID.length; k++) {
            if (Number(arrID[k].DateOfBirth.substring(6, 10)) > Number(min.DateOfBirth.substring(6, 10))) {
                min = arrID[k];
            }
            else if(Number(arrID[k].DateOfBirth.substring(6, 10)) == Number(min.DateOfBirth.substring(6, 10))) {
                if (Number(arrID[k].DateOfBirth.substring(3, 5)) > Number(min.DateOfBirth.substring(3, 5))) {
                    min = arrID[k];
                }
                else if(Number(arrID[k].DateOfBirth.substring(3, 5)) == Number(arrID[k - 1].DateOfBirth.substring(3, 5))) {
                    if (Number(arrID[k].DateOfBirth.substring(0, 2)) > Number(min.DateOfBirth.substring(0, 2))) {
                        min = arrID[k];
                    }
                }

                if (Number(arrID[k].DateOfBirth.substring(6, 10)) < Number(max.DateOfBirth.substring(6, 10))) {
                    max = arrID[k];
                }
                else if(Number(arrID[k].DateOfBirth.substring(6, 10)) == Number(max.DateOfBirth.substring(6, 10))) {
                    if (Number(arrID[k].DateOfBirth.substring(3, 5)) < Number(max.DateOfBirth.substring(3, 5))) {
                        max = arrID[k];
                    }
                    else if(Number(arrID[k].DateOfBirth.substring(3, 5)) == Number(max.DateOfBirth.substring(3, 5))) {
                        if (Number(arrID[k].DateOfBirth.substring(0, 2)) < Number(max.DateOfBirth.substring(0, 2))) {
                            max = arrID[k];
                        }
                    }
                }
            }
        }
        result.push(`${arrCourse[i].IDCourse}: Tuoi nho nhat la: ${min.Name}, Tuoi lon nhat la ${max.Name}`)
    }   
    return result;
}

function sort(): void {
    let result: string;
    let clonedArray: Student[] = Array.from(arr)
    do {
        console.log("Cac tieu chi sap xep bao gom: \n1. MSHS\n2. Ho ten\nDiem trung binh")
        result = question("Moi ban chon tieu chi sap xep: ")
        switch (result) {
            case "1": {
                console.log("1. Tu nho den lon\n2. Tu lon den nho")
                let result1: string = question("Moi ban chon cach sap xep: ")
                switch (result1) {
                    case "1": {
                        for (let i: number = 0; i < clonedArray.length; i++) {
                            let min: Student = clonedArray[i]
                            for (let j: number = i + 1; j < clonedArray.length; j++) {
                                if(Number(clonedArray[j].ID) < Number(min.ID)) {
                                    min = clonedArray[j];
                                }
                            }
                            for (let k: number = i; k < clonedArray.length; k++) {
                                if(Number(clonedArray[k].ID) == Number(min.ID)) {
                                    clonedArray.splice(k, 1)
                                    clonedArray.splice(i, 0, min)
                                    break;
                                }
                            }
                        }
                        console.table(clonedArray)
                        break;
                    }
                    case "2": {
                        for (let i: number = 0; i < clonedArray.length; i++) {
                            let max: Student = clonedArray[i]
                            for (let j: number = i; j < clonedArray.length; j++) {
                                if(Number(clonedArray[j].ID) > Number(max.ID))
                                    max = clonedArray[j]
                            }
                            for (let k: number = i; k < clonedArray.length; k++) {
                                if(Number(clonedArray[k].ID) == Number(max.ID)) {
                                    clonedArray.splice(k, 1)
                                    clonedArray.splice(i, 0, max)
                                    break;
                                }
                            }
                        }
                        console.table(clonedArray)
                        break;
                    }
                    default: {
                        console.log("Ban chon sai chuc nang")
                    } 
                }
                break
            }
            case "2": {
                console.log("Da phan nay em chưa hoan thien :((((")
                break
            }
            //     let result: string  = question("Moi ban chon cach sap xep: ");
            //     let arrName: NameSort[] = [];
            //     let count: number = 0;
            //     let flagFN: boolean = true;
            //     for(let i: number = 0; i < clonedArray.length; i++) {
            //         let index: number[] = []
            //         let xName: NameSort = {namesort: "", group: "", sign: 0}
            //         let x: string = " " + clonedArray[i].Name.toLowerCase().trim() + " ";
            //         for(let j: number = 0; j < x.length; j++) {
            //             if (x[j] == " ")
            //                 index.push(j)
            //         }
            //         for(let j: number = 0; j < index.length; j++) 
            //             if(j == 0)
            //                 xName.namesort = x.slice(index[index.length - 1 - j] + 1, index[index.length - j])
            //             else
            //                 xName.namesort = xName.namesort + "_" + x.slice(index[index.length - 1 - j] + 1, index[index.length - j])
            //         arrName.push(xName)
            //     }
            //     console.log(arrName)

            //     for(let i: number = 0; i < clonedArray.length; i++) {
            //             let x: Student = clonedArray[i]
            //             let xName: NameSort = arrName[i]
            //             for (let j: number = i + 1; j < clonedArray.length; j++) {
            //                 if(Number(arrName[j].namesort.codePointAt(0)) < Number(minName.firstname.codePointAt(0))) {
                        //                         min = clonedArray[j];
                        //                         minName = arrName[j]
                        //                     }
                        //                 }
                        //                 for (let k: number = i; k < clonedArray.length; k++) {
                        //                     if(arrName[k].firstname == minName.firstname) {
                        //                         clonedArray.splice(k, 1)
                        //                         clonedArray.splice(i, 0, min)
                        //                         arrName.splice(k, 1)
                        //                         arrName.splice(i, 0, minName)
                        //                         break;
                        //                     }
                        //                 }
                        //             }
                // }
                
                // do {
                    
                //     for (let i: number = 0; i < clonedArray.length; i++) {
                //         let xName: NameSort = {firstname: "", lastname: "", sign: 0};
                //         if(clonedArray[i].Name.lastIndexOf(" ") == -1) {
                //             xName.firstname = "";
                //             xName.lastname = clonedArray[i].Name.toLowerCase();
                //             if(count == 0)
                //                 arrName.push(xName);
                //             else
                //                 arrName[i] = xName;
                //         }
                //         else {
                //             xName.firstname = clonedArray[i].Name.slice(clonedArray[i].Name.lastIndexOf(" ") + 1, clonedArray[i].Name.lastIndexOf(" ") + 1 + 1 + count).toLowerCase();
                //             xName.lastname = clonedArray[i].Name.slice(0, clonedArray[i].Name.lastIndexOf(" ")).toLowerCase();
                //             if (count == 0)
                //                 arrName.splice(i, 0, xName);
                //             else 
                //                 arrName[i] = xName;
                //         }
                //     }
                //     count++;
                //     for(let i: number = 0; i < arrName.length; i++) {
                //         for(let j: number = i + 1; j < arrName.length; j++) {
                //             if (arrName[i].firstname == arrName[j].firstname) {
                //                 arrName[i].sign = 1;
                //                 arrName[j].sign = 1;
                //             }
                //         }
                //     }
                    
                //     console.log(count)
                //     console.log(arrName)
                //     for(let i: number = 0; i < arrName.length; i++) {
                //         if(arrName[i].sign == 1) {
                //             flagFN = false;
                //             break;
                //         }
                //         else
                //             flagFN = true;
                //     }
                    
                // } while(flagFN == true)
                
                //     switch(result) {
                //         case "1": {
                //             for (let i: number = 0; i < clonedArray.length; i++) {
                //                 let min: Student = clonedArray[i]
                //                 let minName: NameSort = arrName[i]
                //                 for (let j: number = i + 1; j < clonedArray.length; j++) {
                //                     if(Number(arrName[j].firstname.codePointAt(0)) < Number(minName.firstname.codePointAt(0))) {
                //                         min = clonedArray[j];
                //                         minName = arrName[j]
                //                     }
                //                 }
                //                 for (let k: number = i; k < clonedArray.length; k++) {
                //                     if(arrName[k].firstname == minName.firstname) {
                //                         clonedArray.splice(k, 1)
                //                         clonedArray.splice(i, 0, min)
                //                         arrName.splice(k, 1)
                //                         arrName.splice(i, 0, minName)
                //                         break;
                //                     }
                //                 }
                //             }
                //             console.table(clonedArray)
                //             break;
                //         }
                //     }
                
            
            
        }
        result = question("Ban muon sap xep tiep khong (y/n): ")
    } while(result == "y" || result == "Y")
}

function printlist(): void {
    let result: number = Number(checkIDCourse(question("Moi ban nhap ma khoa hoc: ")))
    let list: string[] = []
    for(let i: number = 0; i < arr.length; i++) {
        if(result == Number(arr[i].IDCourse))
            list.push(arr[i].Name)
    }
    console.log("Danh sach cac hoc vien la: ")
    console.log(list)
}

function valedictorian(): void {
    let result: number = Number(checkIDCourse(question("Moi ban nhap ma khoa hoc: ")))
    let max: number = 0;
    for(let i: number = 0; i < arr.length; i++) {
        if(result == Number(arr[i].IDCourse))
            if(max == 0) 
                max = arr[i].Mark
            else 
                if(arr[i].Mark > max)
                    max = arr[i].Mark
    }

    let list: string[] = []
    for(let i: number = 0; i < arr.length; i++) {
        if(max == Number(arr[i].Mark))
            list.push(arr[i].Name)
    }
    console.log("Thu khoa cua khoa hoc nay la: ")
    console.log(list)
}

function statistical(): void {
    let result: number = Number(checkIDCourse(question("Moi ban nhap ma khoa hoc: ")))
    let Excellent: string[] = []
    let Verygood: string[] = []
    let Good: string[] = []
    let Ordinary: string[] = []
    let Fail: string[] = []
    for(let i: number = 0; i < arr.length; i++) {
        if(result == Number(arr[i].IDCourse))
            if(arr[i].Mark >= 9) 
                Excellent.push(arr[i].Name)
            else if(arr[i].Mark >= 8)
                Verygood.push(arr[i].Name)
            else if(arr[i].Mark >= 7)
                Good.push(arr[i].Name)
            else if(arr[i].Mark >= 5)
                Ordinary.push(arr[i].Name)
            else
                Fail.push(arr[i].Name)
    }
    console.log(`Ket qua xep loai khoa hoc ${checkIDCourse(String(result))} la: `)
    console.log(`Xuat sac: ${Excellent.length}`)
    console.log(`Gioi: ${Verygood.length}`)
    console.log(`Kha: ${Good.length}`)
    console.log(`Trung binh: ${Ordinary.length}`)
    console.log(`Khong duoc cap chung chi: ${Fail.length}`)
}

export {arr, arrCourse}
