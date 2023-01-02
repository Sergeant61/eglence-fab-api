export { GetBinaryRequest } from "./definitions/GetBinaryRequest";
export { GetBinaryRequest1 } from "./definitions/GetBinaryRequest1";
export { GetTermsRequest } from "./definitions/GetTermsRequest";
export { GetTermsRequest1 } from "./definitions/GetTermsRequest1";
export { GetInstutionTermsRequest } from "./definitions/GetInstutionTermsRequest";
export { GetInstutionTermsRequest1 } from "./definitions/GetInstutionTermsRequest1";
export { GetFaqRequest } from "./definitions/GetFaqRequest";
export { GetFaqRequest1 } from "./definitions/GetFaqRequest1";
export { GetPinEpayRequest } from "./definitions/GetPinEpayRequest";
export { GetPinEpayRequest1 } from "./definitions/GetPinEpayRequest1";
export { GetPinRequest } from "./definitions/GetPinRequest";
export { GetPinRequest1 } from "./definitions/GetPinRequest1";
export { GetPinGbRequest } from "./definitions/GetPinGbRequest";
export { GetPinGbRequest1 } from "./definitions/GetPinGbRequest1";
export { CancelPinRequest } from "./definitions/CancelPinRequest";
export { CancelPinRequest1 } from "./definitions/CancelPinRequest1";
export { GetPromoCodeRequest } from "./definitions/GetPromoCodeRequest";
export { GetPromoCodeRequest1 } from "./definitions/GetPromoCodeRequest1";
export { GetTransactionsRequest } from "./definitions/GetTransactionsRequest";
export { GetTransactionsRequest1 } from "./definitions/GetTransactionsRequest1";
export { GetCategoriesRequest } from "./definitions/GetCategoriesRequest";
export { GetCategoriesRequest1 } from "./definitions/GetCategoriesRequest1";
export { GetRedeemRequest } from "./definitions/GetRedeemRequest";
export { GetRedeemRequest1 } from "./definitions/GetRedeemRequest1";
export { GetProductsRequest } from "./definitions/GetProductsRequest";
export { GetProductsRequest1 } from "./definitions/GetProductsRequest1";
export { GetProductsInfoRequest } from "./definitions/GetProductsInfoRequest";
export { GetProductsInfoRequest1 } from "./definitions/GetProductsInfoRequest1";
export { SearchRequest } from "./definitions/SearchRequest";
export { SearchRequest1 } from "./definitions/SearchRequest1";
export { ValidatePinRequest } from "./definitions/ValidatePinRequest";
export { ValidatePinRequest1 } from "./definitions/ValidatePinRequest1";
export { ValidatePinExRequest } from "./definitions/ValidatePinExRequest";
export { ValidatePinExRequest1 } from "./definitions/ValidatePinExRequest1";
export { ValidatePinGbRequest } from "./definitions/ValidatePinGbRequest";
export { ValidatePinGbRequest1 } from "./definitions/ValidatePinGbRequest1";
export { SendSmsRequest } from "./definitions/SendSmsRequest";
export { SendSmsRequest1 } from "./definitions/SendSmsRequest1";
export { SendEmailRequest } from "./definitions/SendEmailRequest";
export { SendEmailRequest1 } from "./definitions/SendEmailRequest1";
export { FinalizeDayRequest } from "./definitions/FinalizeDayRequest";
export { FinalizeDayRequest1 } from "./definitions/FinalizeDayRequest1";
export { SetIsAvailableRequest } from "./definitions/SetIsAvailableRequest";
export { SetIsAvailableRequest1 } from "./definitions/SetIsAvailableRequest1";
export { createClientAsync, SoapClient } from "./client";
export { EfDigitalCodesWebServicesV20 } from "./services/EfDigitalCodesWebServicesV20";
export { EfDigitalCodesWebServicesV20Port } from "./ports/EfDigitalCodesWebServicesV20Port";

import { createClientAsync } from "./client";

const eglencefabApi = { createClientAsync };
export default eglencefabApi;
module.exports = eglencefabApi;

async function run() {
  /**
   * InstutionCode = EFC5181001
Secret = 2b8f8883-7f61-11ed-84d7-0a84c5c3a0ee
TerminalID = 999801701
InstutionID = 35 
999801701EFC51810012b8f8883-7f61-11ed-84d7-0a84c5c3a0ee
   */

  const client = await createClientAsync("http://codes.eglencefabrikasi.com/Services/service.php?wsdl");
  try {

    const re = await client.getProductsAsync({
      terminalId: "999801701",
      signature: "772770c0fbca15d82b28cff9424ca114",
      categoryId: "0",
      ean: ""
    });

    // const result1 = await client.getProductsAsync({
    //   terminalId: "999801701",
    //   signature: "772770c0fbca15d82b28cff9424ca114",
    //   categoryId: "106",
    //   ean: ""
    // });
    // const result = await client.getProductsAsync({
    //   terminalId: "999801701",
    //   signature: "772770c0fbca15d82b28cff9424ca114",
    //   categoryId: "0",
    //   ean: ""
    // });

    console.log(JSON.stringify(re[0]));
  } catch (error) {
    console.log(error);

  }



}

run();