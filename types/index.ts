export interface _product {
  id: string;
  brand: string;
  expired_at: string;
  spot_menu_id: string;
}

export interface ResponseData {
  message: string;
  data?: any;
  error_info?: any;
}
