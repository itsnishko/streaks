import { Record } from './record.model.js';
import { Metric } from './metric.model.js';
export interface Activity {
    id: string;
    name: string;
    isActive: boolean;
    description?: string;
    createdOn: Date;
    createdBy: string;
    updatedOn: Date;
    updatedBy: string;
    records: Record[];
    metrics: Metric[];
}