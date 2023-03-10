import { GetBinaryRequest } from "../definitions/GetBinaryRequest";
import { GetBinaryRequest1 } from "../definitions/GetBinaryRequest1";
import { GetTermsRequest } from "../definitions/GetTermsRequest";
import { GetTermsRequest1 } from "../definitions/GetTermsRequest1";
import { GetInstutionTermsRequest } from "../definitions/GetInstutionTermsRequest";
import { GetInstutionTermsRequest1 } from "../definitions/GetInstutionTermsRequest1";
import { GetFaqRequest } from "../definitions/GetFaqRequest";
import { GetFaqRequest1 } from "../definitions/GetFaqRequest1";
import { GetPinEpayRequest } from "../definitions/GetPinEpayRequest";
import { GetPinEpayRequest1 } from "../definitions/GetPinEpayRequest1";
import { GetPinRequest } from "../definitions/GetPinRequest";
import { GetPinRequest1 } from "../definitions/GetPinRequest1";
import { GetPinGbRequest } from "../definitions/GetPinGbRequest";
import { GetPinGbRequest1 } from "../definitions/GetPinGbRequest1";
import { CancelPinRequest } from "../definitions/CancelPinRequest";
import { CancelPinRequest1 } from "../definitions/CancelPinRequest1";
import { GetPromoCodeRequest } from "../definitions/GetPromoCodeRequest";
import { GetPromoCodeRequest1 } from "../definitions/GetPromoCodeRequest1";
import { GetTransactionsRequest } from "../definitions/GetTransactionsRequest";
import { GetTransactionsRequest1 } from "../definitions/GetTransactionsRequest1";
import { GetCategoriesRequest } from "../definitions/GetCategoriesRequest";
import { GetCategoriesRequest1 } from "../definitions/GetCategoriesRequest1";
import { GetRedeemRequest } from "../definitions/GetRedeemRequest";
import { GetRedeemRequest1 } from "../definitions/GetRedeemRequest1";
import { GetProductsRequest } from "../definitions/GetProductsRequest";
import { GetProductsRequest1 } from "../definitions/GetProductsRequest1";
import { GetProductsInfoRequest } from "../definitions/GetProductsInfoRequest";
import { GetProductsInfoRequest1 } from "../definitions/GetProductsInfoRequest1";
import { SearchRequest } from "../definitions/SearchRequest";
import { SearchRequest1 } from "../definitions/SearchRequest1";
import { ValidatePinRequest } from "../definitions/ValidatePinRequest";
import { ValidatePinRequest1 } from "../definitions/ValidatePinRequest1";
import { ValidatePinExRequest } from "../definitions/ValidatePinExRequest";
import { ValidatePinExRequest1 } from "../definitions/ValidatePinExRequest1";
import { ValidatePinGbRequest } from "../definitions/ValidatePinGbRequest";
import { ValidatePinGbRequest1 } from "../definitions/ValidatePinGbRequest1";
import { SendSmsRequest } from "../definitions/SendSmsRequest";
import { SendSmsRequest1 } from "../definitions/SendSmsRequest1";
import { SendEmailRequest } from "../definitions/SendEmailRequest";
import { SendEmailRequest1 } from "../definitions/SendEmailRequest1";
import { FinalizeDayRequest } from "../definitions/FinalizeDayRequest";
import { FinalizeDayRequest1 } from "../definitions/FinalizeDayRequest1";
import { SetIsAvailableRequest } from "../definitions/SetIsAvailableRequest";
import { SetIsAvailableRequest1 } from "../definitions/SetIsAvailableRequest1";

export interface EfDigitalCodesWebServicesV20Port {
    getBinary(getBinaryRequest: GetBinaryRequest, callback: (err: any, result: GetBinaryRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getTerms(getTermsRequest: GetTermsRequest, callback: (err: any, result: GetTermsRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getInstutionTerms(getInstutionTermsRequest: GetInstutionTermsRequest, callback: (err: any, result: GetInstutionTermsRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getFaq(getFaqRequest: GetFaqRequest, callback: (err: any, result: GetFaqRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getPinEpay(getPinEpayRequest: GetPinEpayRequest, callback: (err: any, result: GetPinEpayRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getPin(getPinRequest: GetPinRequest, callback: (err: any, result: GetPinRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getPinGB(getPinGbRequest: GetPinGbRequest, callback: (err: any, result: GetPinGbRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cancelPin(cancelPinRequest: CancelPinRequest, callback: (err: any, result: CancelPinRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getPromoCode(getPromoCodeRequest: GetPromoCodeRequest, callback: (err: any, result: GetPromoCodeRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getTransactions(getTransactionsRequest: GetTransactionsRequest, callback: (err: any, result: GetTransactionsRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCategories(getCategoriesRequest: GetCategoriesRequest, callback: (err: any, result: GetCategoriesRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getRedeem(getRedeemRequest: GetRedeemRequest, callback: (err: any, result: GetRedeemRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getProducts(getProductsRequest: GetProductsRequest, callback: (err: any, result: GetProductsRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getProductsInfo(getProductsInfoRequest: GetProductsInfoRequest, callback: (err: any, result: GetProductsInfoRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    search(searchRequest: SearchRequest, callback: (err: any, result: SearchRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    validatePin(validatePinRequest: ValidatePinRequest, callback: (err: any, result: ValidatePinRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    validatePinEx(validatePinExRequest: ValidatePinExRequest, callback: (err: any, result: ValidatePinExRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    validatePinGB(validatePinGbRequest: ValidatePinGbRequest, callback: (err: any, result: ValidatePinGbRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    sendSMS(sendSmsRequest: SendSmsRequest, callback: (err: any, result: SendSmsRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    sendEmail(sendEmailRequest: SendEmailRequest, callback: (err: any, result: SendEmailRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    finalizeDay(finalizeDayRequest: FinalizeDayRequest, callback: (err: any, result: FinalizeDayRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    setIsAvailable(setIsAvailableRequest: SetIsAvailableRequest, callback: (err: any, result: SetIsAvailableRequest1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
