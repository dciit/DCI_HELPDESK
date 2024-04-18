export interface MStatus {
    status: boolean;
    message: string;
}
export interface MInsertJob {
    dictCode: string;
    jobFac: number;
    jobLocation: string;
    jobReqBy: string;
    jobDesc: string;
}
export interface MGetDict {
    dictCategory: string;
}
export interface HelpDeskDict {
    dcitId: number;
    dictCategory: string;
    dictCode: string;
    dictIndex: number;
    dictTitle: string;
    dictDesc: string;
    dictRatio: number;
    dictRef: string;
    dictCreateBy: string;
    dictCreateDate: Date;
    dictActive: boolean;
    dictUpdateDate: Date;
    dictUpdateBy: string;
    active?: boolean;
}