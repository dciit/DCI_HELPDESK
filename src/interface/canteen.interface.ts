export interface canteenMonitor {
    serveShift: string;
    serveDate: string;
    serveTime: string;
    totalEmployee: number; // จำนวนพนักงาน
    totalPrepare: number[]; // ยอดจัด จำนวน 7 รายการ
    totalServe: number[]; // ยอดแตะบัตร จำนวน 7 รายการ
}

export interface canteenSummary {

    status: string;
    data: {
        dataShift: string;
        shift: string;
        totalEmployee: string;
        muId1: string; // จำนวนพนักงาน
        totalPrepare1: string; // ยอดจัด จำนวน 7 รายการ
        totalServe1: string; // ยอดแตะบัตร จำนวน 7 รายการ
        muId2: string; // จำนวนพนักงาน
        totalPrepare2: string; // ยอดจัด จำนวน 7 รายการ
        totalServe2: string; // ยอดแตะบัตร จำนวน 7 รายการ
        muId3: string; // จำนวนพนักงาน
        totalPrepare3: string; // ยอดจัด จำนวน 7 รายการ
        totalServe3: string; // ยอดแตะบัตร จำนวน 7 รายการ
        muId4: string; // จำนวนพนักงาน
        totalPrepare4: string; // ยอดจัด จำนวน 7 รายการ
        totalServe4: string; // ยอดแตะบัตร จำนวน 7 รายการ
        muId5: string; // จำนวนพนักงาน
        totalPrepare5: string; // ยอดจัด จำนวน 7 รายการ
        totalServe5: string; // ยอดแตะบัตร จำนวน 7 รายการ
        muId6: string; // จำนวนพนักงาน
        totalPrepare6: string; // ยอดจัด จำนวน 7 รายการ
        totalServe6: string; // ยอดแตะบัตร จำนวน 7 รายการ
        muId7: string; // จำนวนพนักงาน
        totalPrepare7: string; // ยอดจัด จำนวน 7 รายการ
        totalServe7: string; // ยอดแตะบัตร จำนวน 7 รายการ
    }
}


export interface canteenInfo {

    dataShift: string;
    shift: string;
    totalEmployee: string;
    muId1: string; // จำนวนพนักงาน
    totalPrepare1: string; // ยอดจัด จำนวน 7 รายการ
    totalServe1: string; // ยอดแตะบัตร จำนวน 7 รายการ
    muId2: string; // จำนวนพนักงาน
    totalPrepare2: string; // ยอดจัด จำนวน 7 รายการ
    totalServe2: string; // ยอดแตะบัตร จำนวน 7 รายการ
    muId3: string; // จำนวนพนักงาน
    totalPrepare3: string; // ยอดจัด จำนวน 7 รายการ
    totalServe3: string; // ยอดแตะบัตร จำนวน 7 รายการ
    muId4: string; // จำนวนพนักงาน
    totalPrepare4: string; // ยอดจัด จำนวน 7 รายการ
    totalServe4: string; // ยอดแตะบัตร จำนวน 7 รายการ
    muId5: string; // จำนวนพนักงาน
    totalPrepare5: string; // ยอดจัด จำนวน 7 รายการ
    totalServe5: string; // ยอดแตะบัตร จำนวน 7 รายการ
    muId6: string; // จำนวนพนักงาน
    totalPrepare6: string; // ยอดจัด จำนวน 7 รายการ
    totalServe6: string; // ยอดแตะบัตร จำนวน 7 รายการ
    muId7: string; // จำนวนพนักงาน
    totalPrepare7: string; // ยอดจัด จำนวน 7 รายการ
    totalServe7: string; // ยอดแตะบัตร จำนวน 7 รายการ

}


export interface canteenParamInfo {
    dateShift: string;
    shift: string;
}