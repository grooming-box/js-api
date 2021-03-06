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

import ApiClient from '../ApiClient';

/**
 * The Service model module.
 * @module model/Service
 * @version 1.2.1
 */
class Service {
  /**
   * Constructs a new <code>Service</code>.
   * @alias module:model/Service
   * @param name {String} Название Услуги
   * @param serviceType {module:model/Service.ServiceTypeEnum} Тип услуги - для кошек, для собак, для других
   */
  constructor(name, serviceType) {

    Service.initialize(this, name, serviceType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, name, serviceType) {
    obj['name'] = name;
    obj['service_type'] = serviceType;
  }

  /**
   * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Service} obj Optional instance to populate.
   * @return {module:model/Service} The populated <code>Service</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Service();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('image_upload')) {
        obj['image_upload'] = ApiClient.convertToType(data['image_upload'], File);
      }
      if (data.hasOwnProperty('service_type')) {
        obj['service_type'] = ApiClient.convertToType(data['service_type'], 'Number');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
    }
    return obj;
  }

}

/**
 * @member {Number} id
 */
Service.prototype['id'] = undefined;

/**
 * Название Услуги
 * @member {String} name
 */
Service.prototype['name'] = undefined;

/**
 * Загружаемое изображение услуги
 * @member {File} image_upload
 */
Service.prototype['image_upload'] = undefined;

/**
 * Тип услуги - для кошек, для собак, для других
 * @member {module:model/Service.ServiceTypeEnum} service_type
 */
Service.prototype['service_type'] = undefined;

/**
 * Изображение услуги
 * @member {String} image
 */
Service.prototype['image'] = undefined;

/**
 * Цена на услугу
 * @member {Number} price
 */
Service.prototype['price'] = undefined;

/**
 * Описание услуги
 * @member {String} text
 */
Service.prototype['text'] = undefined;

/**
 * Allowed values for the <code>service_type</code> property.
 * @enum {Number}
 * @readonly
 */
Service['ServiceTypeEnum'] = {

  /**
   * value: 0
   * @const
   */
  "0": 0,

  /**
   * value: 1
   * @const
   */
  "1": 1,

  /**
   * value: 2
   * @const
   */
  "2": 2
};

export default Service;
