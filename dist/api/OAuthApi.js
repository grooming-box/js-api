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
import Bearer from '../model/Bearer';
import OneOfMasterClient from '../model/OneOfMasterClient';
/**
* OAuth service.
* @module api/OAuthApi
* @version 1.2.1
*/

export default class OAuthApi {
  /**
  * Constructs a new OAuthApi. 
  * @alias module:api/OAuthApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Callback function to receive the result of the oauthClientLoginPost operation.
   * @callback module:api/OAuthApi~oauthClientLoginPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Bearer} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Аутентифицирует клиента - салон или частного грумера 
   * Эндпоинт для авторизации клиента 
   * @param {Object} body Аутентифицирует клиента - салон или частного грумера
   * @param {module:api/OAuthApi~oauthClientLoginPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Bearer}
   */


  oauthClientLoginPost(body, callback) {
    let postBody = body; // verify the required parameter 'body' is set

    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling oauthClientLoginPost");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = Bearer;
    return this.apiClient.callApi('/oauth/client/login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the oauthMasterLoginPost operation.
   * @callback module:api/OAuthApi~oauthMasterLoginPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Bearer} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Аутентифицирует клиента - салон или частного грумера 
   * Эндпоинт для авторизации Мастера 
   * @param {Object} body Аутентифицирует клиента - салон или частного грумера
   * @param {module:api/OAuthApi~oauthMasterLoginPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Bearer}
   */


  oauthMasterLoginPost(body, callback) {
    let postBody = body; // verify the required parameter 'body' is set

    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling oauthMasterLoginPost");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = Bearer;
    return this.apiClient.callApi('/oauth/master/login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the oauthMeGet operation.
   * @callback module:api/OAuthApi~oauthMeGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/OneOfMasterClient} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * 
   * 
   * @param {module:api/OAuthApi~oauthMeGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/OneOfMasterClient}
   */


  oauthMeGet(callback) {
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = OneOfMasterClient;
    return this.apiClient.callApi('/oauth/me', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

}