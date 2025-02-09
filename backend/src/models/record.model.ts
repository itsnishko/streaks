import { Activity } from './activity.model.js';
import { Value } from './value.model.js';

export interface Record {
    id: string;
    name: string;
    description?: string;
    createdOn: Date;
    createdBy: string;
    updatedOn: Date;
    updatedBy: string;
    activityId: string;
    activity: Activity;
    values: Value[];
}