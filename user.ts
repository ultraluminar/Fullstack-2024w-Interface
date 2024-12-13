/* tslint:disable */
/* eslint-disable */
/**
 * Fullstack
 * API für das Fullstack Projekt
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 
 *
 * @export
 * @interface User
 */
export interface User {

    /**
     * @type {string}
     * @memberof User
     * @example 12345
     */
    id?: string;

    /**
     * @type {string}
     * @memberof User
     * @example MaxMustmann123#
     */
    username?: string;

    /**
     * @type {Date}
     * @memberof User
     * @example 2024-11-08T12:34:56Z
     */
    createdAt?: Date;
}
