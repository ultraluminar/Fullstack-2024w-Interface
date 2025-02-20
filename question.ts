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
 * @interface Question
 */
export interface Question {

    /**
     * @type {number}
     * @memberof Question
     * @example 12345
     */
    id?: number;

    /**
     * @type {string}
     * @memberof Question
     * @example Wie schreibe ich eine Fullstack Webanwendung?
     */
    title?: string;

    /**
     * @type {string}
     * @memberof Question
     * @example Bitte helft mir das Modul ist so schwer!
     */
    body?: string;

    /**
     * @type {Date}
     * @memberof Question
     * @example 2024-11-08T12:34:56Z
     */
    createdAt?: Date;

    /**
     * @type {Date}
     * @memberof Question
     * @example 2024-11-08T12:34:56Z
     */
    updatedAt?: Date;

    /**
     * @type {number}
     * @memberof Question
     * @example 12345
     */
    userId?: number;
}
