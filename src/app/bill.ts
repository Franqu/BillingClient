export interface Bill {
    id: number;
    phoneNumberCaller: string;
    phoneNumberReceiver: string;
    ongoing: boolean;
    lenght: number;
    size: number;
    callTime: Date;
    connectionType: number;
}