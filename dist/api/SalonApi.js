/**
 * Groomer Service
 * API для будущей GroomCRM или назовите ее уже как-нибудь. На этой странице расписаны основные эндпоинты, по которым можно получить данные из базы данных (или положить их туда, если будет такая возможность). Также здесь можно будет протестировать эти самые эндпоинты, посмотреть ответы и всякое такое.  ### Changelog  **v1.2.2**: Добавлена сущность Салонов - географических расположений точек обслуживания клиентов, к которым привязываются мастера. Для получения списка мастеров салона добавлен фильтр salon_id  **v1.2.1**: Добавил эндпоинт для получения информации об авторизованном Клиенте/Мастере  **v1.2.0**: Обновлены пути, респонсы, эндпоинты для приложений вынесены в отдельный стек  **v1.1.4**: Обновил структуру WorkingDiapason  **v1.1.3**: Добавил описания возвращаемых кодов.  **v1.1.2**: Удалил упоминания Питомцев и Пушей из АПИ  **v1.1.1**: Добавил параметр \"платформа\" для заказа, заменил OneSignal на FCM + APNs  **v1.1.0**: Убрал пуши из API  **v1.0.4**: добавлены фильтры по датам, добавлено поле телефона для мастеров (для смс-оповещений), добавлено поле push_device_id для отправки пушей на телефон. 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: kosolapus@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import InlineResponse200 from '../model/InlineResponse200';
import Salon from '../model/Salon';
/**
* Salon service.
* @module api/SalonApi
* @version 1.2.1
*/

export default class SalonApi {
  /**
  * Constructs a new SalonApi. 
  * @alias module:api/SalonApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Callback function to receive the result of the clientClientIDSalonGet operation.
   * @callback module:api/SalonApi~clientClientIDSalonGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Получение списка точек одного владельца
   * Store *Salon* entity
   * @param {Number} clientID ID аккаунта
   * @param {module:api/SalonApi~clientClientIDSalonGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse200}
   */


  clientClientIDSalonGet(clientID, callback) {
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDSalonGet");
    }

    let pathParams = {
      'clientID': clientID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = InlineResponse200;
    return this.apiClient.callApi('/client/{clientID}/salon', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDSalonPost operation.
   * @callback module:api/SalonApi~clientClientIDSalonPostCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * 
   * 
   * @param {Number} clientID ID аккаунта
   * @param {module:model/Salon} salon Store *Salon* entity
   * @param {module:api/SalonApi~clientClientIDSalonPostCallback} callback The callback function, accepting three arguments: error, data, response
   */


  clientClientIDSalonPost(clientID, salon, callback) {
    let postBody = salon; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDSalonPost");
    } // verify the required parameter 'salon' is set


    if (salon === undefined || salon === null) {
      throw new Error("Missing the required parameter 'salon' when calling clientClientIDSalonPost");
    }

    let pathParams = {
      'clientID': clientID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearerAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/client/{clientID}/salon', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDSalonSalonIDDelete operation.
   * @callback module:api/SalonApi~clientClientIDSalonSalonIDDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * 
   * 
   * @param {Number} clientID ID аккаунта
   * @param {Number} salonID ID салона
   * @param {module:api/SalonApi~clientClientIDSalonSalonIDDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  clientClientIDSalonSalonIDDelete(clientID, salonID, callback) {
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDSalonSalonIDDelete");
    } // verify the required parameter 'salonID' is set


    if (salonID === undefined || salonID === null) {
      throw new Error("Missing the required parameter 'salonID' when calling clientClientIDSalonSalonIDDelete");
    }

    let pathParams = {
      'clientID': clientID,
      'salonID': salonID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/client/{clientID}/salon/{salonID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDSalonSalonIDGet operation.
   * @callback module:api/SalonApi~clientClientIDSalonSalonIDGetCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Получение детальной информации салона
   * 
   * @param {Number} clientID ID аккаунта
   * @param {Number} salonID ID салона
   * @param {module:api/SalonApi~clientClientIDSalonSalonIDGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */


  clientClientIDSalonSalonIDGet(clientID, salonID, callback) {
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDSalonSalonIDGet");
    } // verify the required parameter 'salonID' is set


    if (salonID === undefined || salonID === null) {
      throw new Error("Missing the required parameter 'salonID' when calling clientClientIDSalonSalonIDGet");
    }

    let pathParams = {
      'clientID': clientID,
      'salonID': salonID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Object;
    return this.apiClient.callApi('/client/{clientID}/salon/{salonID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDSalonSalonIDPatch operation.
   * @callback module:api/SalonApi~clientClientIDSalonSalonIDPatchCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * 
   * 
   * @param {Number} clientID ID аккаунта
   * @param {Number} salonID ID салона
   * @param {module:model/Salon} salon Optional description in *Markdown*
   * @param {module:api/SalonApi~clientClientIDSalonSalonIDPatchCallback} callback The callback function, accepting three arguments: error, data, response
   */


  clientClientIDSalonSalonIDPatch(clientID, salonID, salon, callback) {
    let postBody = salon; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDSalonSalonIDPatch");
    } // verify the required parameter 'salonID' is set


    if (salonID === undefined || salonID === null) {
      throw new Error("Missing the required parameter 'salonID' when calling clientClientIDSalonSalonIDPatch");
    } // verify the required parameter 'salon' is set


    if (salon === undefined || salon === null) {
      throw new Error("Missing the required parameter 'salon' when calling clientClientIDSalonSalonIDPatch");
    }

    let pathParams = {
      'clientID': clientID,
      'salonID': salonID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {
      _method: "PATCH"
    };
    let authNames = ['bearerAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/client/{clientID}/salon/{salonID}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

}