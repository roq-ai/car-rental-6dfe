import { ReservationInterface } from 'interfaces/reservation';
import { UsageInterface } from 'interfaces/usage';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  info: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  reservation?: ReservationInterface[];
  usage?: UsageInterface[];
  company?: CompanyInterface;
  _count?: {
    reservation?: number;
    usage?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  info?: string;
  company_id?: string;
}
