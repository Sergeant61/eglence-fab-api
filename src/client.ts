import { Client as _SoapClient, createClientAsync as soapCreateClientAsync, IHeaders, IMTOMAttachments, ISecurity, WSDL } from "soap";
import { GetBinaryRequest } from "./definitions/GetBinaryRequest";
import { GetBinaryRequest1 } from "./definitions/GetBinaryRequest1";
import { GetTermsRequest } from "./definitions/GetTermsRequest";
import { GetTermsRequest1 } from "./definitions/GetTermsRequest1";
import { GetInstutionTermsRequest } from "./definitions/GetInstutionTermsRequest";
import { GetInstutionTermsRequest1 } from "./definitions/GetInstutionTermsRequest1";
import { GetFaqRequest } from "./definitions/GetFaqRequest";
import { GetFaqRequest1 } from "./definitions/GetFaqRequest1";
import { GetPinEpayRequest } from "./definitions/GetPinEpayRequest";
import { GetPinEpayRequest1 } from "./definitions/GetPinEpayRequest1";
import { GetPinRequest } from "./definitions/GetPinRequest";
import { GetPinRequest1 } from "./definitions/GetPinRequest1";
import { GetPinGbRequest } from "./definitions/GetPinGbRequest";
import { GetPinGbRequest1 } from "./definitions/GetPinGbRequest1";
import { CancelPinRequest } from "./definitions/CancelPinRequest";
import { CancelPinRequest1 } from "./definitions/CancelPinRequest1";
import { GetPromoCodeRequest } from "./definitions/GetPromoCodeRequest";
import { GetPromoCodeRequest1 } from "./definitions/GetPromoCodeRequest1";
import { GetTransactionsRequest } from "./definitions/GetTransactionsRequest";
import { GetTransactionsRequest1 } from "./definitions/GetTransactionsRequest1";
import { GetCategoriesRequest } from "./definitions/GetCategoriesRequest";
import { GetCategoriesRequest1 } from "./definitions/GetCategoriesRequest1";
import { GetRedeemRequest } from "./definitions/GetRedeemRequest";
import { GetRedeemRequest1 } from "./definitions/GetRedeemRequest1";
import { GetProductsRequest } from "./definitions/GetProductsRequest";
import { GetProductsRequest1 } from "./definitions/GetProductsRequest1";
import { GetProductsInfoRequest } from "./definitions/GetProductsInfoRequest";
import { GetProductsInfoRequest1 } from "./definitions/GetProductsInfoRequest1";
import { SearchRequest } from "./definitions/SearchRequest";
import { SearchRequest1 } from "./definitions/SearchRequest1";
import { ValidatePinRequest } from "./definitions/ValidatePinRequest";
import { ValidatePinRequest1 } from "./definitions/ValidatePinRequest1";
import { ValidatePinExRequest } from "./definitions/ValidatePinExRequest";
import { ValidatePinExRequest1 } from "./definitions/ValidatePinExRequest1";
import { ValidatePinGbRequest } from "./definitions/ValidatePinGbRequest";
import { ValidatePinGbRequest1 } from "./definitions/ValidatePinGbRequest1";
import { SendSmsRequest } from "./definitions/SendSmsRequest";
import { SendSmsRequest1 } from "./definitions/SendSmsRequest1";
import { SendEmailRequest } from "./definitions/SendEmailRequest";
import { SendEmailRequest1 } from "./definitions/SendEmailRequest1";
import { FinalizeDayRequest } from "./definitions/FinalizeDayRequest";
import { FinalizeDayRequest1 } from "./definitions/FinalizeDayRequest1";
import { SetIsAvailableRequest } from "./definitions/SetIsAvailableRequest";
import { SetIsAvailableRequest1 } from "./definitions/SetIsAvailableRequest1";
import { EfDigitalCodesWebServicesV20 } from "./services/EfDigitalCodesWebServicesV20";

export interface SoapClient extends _SoapClient {
    EfDigitalCodesWebServicesV20: EfDigitalCodesWebServicesV20;
    getBinaryAsync(getBinaryRequest: GetBinaryRequest): Promise<[result: GetBinaryRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getTermsAsync(getTermsRequest: GetTermsRequest): Promise<[result: GetTermsRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getInstutionTermsAsync(getInstutionTermsRequest: GetInstutionTermsRequest): Promise<[result: GetInstutionTermsRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getFaqAsync(getFaqRequest: GetFaqRequest): Promise<[result: GetFaqRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getPinEpayAsync(getPinEpayRequest: GetPinEpayRequest): Promise<[result: GetPinEpayRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getPinAsync(getPinRequest: GetPinRequest): Promise<[result: GetPinRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getPinGBAsync(getPinGbRequest: GetPinGbRequest): Promise<[result: GetPinGbRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    cancelPinAsync(cancelPinRequest: CancelPinRequest): Promise<[result: CancelPinRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getPromoCodeAsync(getPromoCodeRequest: GetPromoCodeRequest): Promise<[result: GetPromoCodeRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getTransactionsAsync(getTransactionsRequest: GetTransactionsRequest): Promise<[result: GetTransactionsRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCategoriesAsync(getCategoriesRequest: GetCategoriesRequest): Promise<[result: GetCategoriesRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getRedeemAsync(getRedeemRequest: GetRedeemRequest): Promise<[result: GetRedeemRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getProductsAsync(getProductsRequest: GetProductsRequest): Promise<[result: GetProductsRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getProductsInfoAsync(getProductsInfoRequest: GetProductsInfoRequest): Promise<[result: GetProductsInfoRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    searchAsync(searchRequest: SearchRequest): Promise<[result: SearchRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    validatePinAsync(validatePinRequest: ValidatePinRequest): Promise<[result: ValidatePinRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    validatePinExAsync(validatePinExRequest: ValidatePinExRequest): Promise<[result: ValidatePinExRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    validatePinGBAsync(validatePinGbRequest: ValidatePinGbRequest): Promise<[result: ValidatePinGbRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    sendSMSAsync(sendSmsRequest: SendSmsRequest): Promise<[result: SendSmsRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    sendEmailAsync(sendEmailRequest: SendEmailRequest): Promise<[result: SendEmailRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    finalizeDayAsync(finalizeDayRequest: FinalizeDayRequest): Promise<[result: FinalizeDayRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
    setIsAvailableAsync(setIsAvailableRequest: SetIsAvailableRequest): Promise<[result: SetIsAvailableRequest1, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<SoapClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}


