export interface canteenMonitor {
    serveShift: string;
    serveDate: string;
    serveTime: string;
    totalEmployee: number; // จำนวนพนักงาน
    totalPrepare: number[]; // ยอดจัด จำนวน 7 รายการ
    totalServe: number[]; // ยอดแตะบัตร จำนวน 7 รายการ
}