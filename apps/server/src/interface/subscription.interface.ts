import { Types } from "mongoose";

export interface ISubscription {
  id: string;
  userId: Types.ObjectId;
  appName: string;
  category:
    | "Productivity"
    | "Education"
    | "Entertainment"
    | "Utility"
    | "Other";
  planType: "Monthy" | "Yearly" | "Free" | "Trial";
  amount: string;
  currency: string;
  paymentMethod: "Credit Card" | "Debit Card" | "PayPal" | "Upi" | "Other";
  autoRenew: boolean;
  startDate: Date;
  nextBillingDate: Date;
  remindaerDaysBefore: "1" | "3" | "7" | "14" | "30";
  status: "Active" | "Inactive" | "Cancelled" | "Paused";
  createdAt?: Date;
  updatedAt?: Date;
  isdeleted: boolean;
}
