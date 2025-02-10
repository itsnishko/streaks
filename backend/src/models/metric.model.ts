import { Activity } from './activity.model.js';
import { Value } from './value.model.js';

export interface Metric {
    id: string;
    name: string;
    description: string;
    dataType: string;
    isRequired: boolean;
    isActive: boolean;
    createdOn: Date;
    createdBy: string;
    updatedOn: Date;
    updatedBy: string;
    activityId: string;
    activity: Activity;
    values: Value[];
}