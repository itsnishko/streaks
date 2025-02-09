import { Record } from './record.model.js';
import { Metric } from './metric.model.js';
export interface Value {
    recordId: string;
    fieldId: string;
    data?: string;
    createdOn: Date;
    createdBy: string;
    updatedOn: Date;
    updatedBy: string;
    record: Record;
    metric: Metric;
}
