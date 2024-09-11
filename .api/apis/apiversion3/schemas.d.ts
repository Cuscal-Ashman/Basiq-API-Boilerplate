declare const CreateUser: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "The end-users email address. Mandatory if mobile is not supplied.";
                readonly examples: readonly ["gavin@hooli.com"];
            };
            readonly mobile: {
                readonly type: "string";
                readonly description: "The end-users mobile number, supplied in international format. +[country-code][mobileno]. Mandatory if email is not supplied.";
                readonly examples: readonly ["+61410888999"];
            };
            readonly firstName: {
                readonly type: "string";
                readonly description: "The end-users first name as an optional additional parameter.";
                readonly examples: readonly ["Gavin"];
            };
            readonly middleName: {
                readonly type: "string";
                readonly description: "The end-users middle name as an optional additional parameter.";
                readonly examples: readonly ["middle name"];
            };
            readonly lastName: {
                readonly type: "string";
                readonly description: "The end-users last name as an optional additional parameter.";
                readonly examples: readonly ["Belson"];
            };
            readonly businessName: {
                readonly type: "string";
                readonly description: "The official name of the business.";
                readonly examples: readonly ["Manly Accounting PTY LTD"];
            };
            readonly businessIdNo: {
                readonly type: "string";
                readonly description: "This number is used to identify a business when they’re dealing with the government, other businesses, and the public.";
                readonly examples: readonly ["16 7645 892"];
            };
            readonly businessIdNoType: {
                readonly type: "string";
                readonly description: "Type of business ID could be ABN Or ACN.";
                readonly enum: readonly ["ABN", "ACN"];
                readonly examples: readonly ["ABN"];
            };
            readonly businessAddress: {
                readonly type: "object";
                readonly properties: {
                    readonly addressLine1: {
                        readonly type: "string";
                        readonly description: "The first line of the business address.";
                        readonly examples: readonly ["21 Sydney Rd"];
                    };
                    readonly addressLine2: {
                        readonly type: "string";
                        readonly description: "Additional information about the business address (optional).";
                        readonly examples: readonly [""];
                    };
                    readonly suburb: {
                        readonly type: "string";
                        readonly description: "The suburb or locality where the business is located.";
                        readonly examples: readonly ["Manly"];
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "The state or territory where the business is located.";
                        readonly examples: readonly ["NSW"];
                    };
                    readonly postcode: {
                        readonly type: "string";
                        readonly description: "The postal code of the business location.";
                        readonly examples: readonly ["2095"];
                    };
                    readonly countryCode: {
                        readonly type: "string";
                        readonly description: "The country code of the business location.";
                        readonly examples: readonly ["AUS"];
                    };
                };
            };
            readonly verificationStatus: {
                readonly type: "boolean";
                readonly description: "Indicates if the business information provided is verified against the Australian Business Register.";
            };
            readonly verificationDate: {
                readonly type: "string";
                readonly description: "when the verification was done.";
                readonly examples: readonly ["12/01/2024"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly title: "UserPostResponse";
            readonly required: readonly ["id", "links", "mobile", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of the response, always \"user\".";
                    readonly examples: readonly ["user"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "A string that uniquely identifies the user.";
                    readonly examples: readonly ["e1956419"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "The end-users email address.";
                    readonly format: "email";
                    readonly examples: readonly ["gavin@hooli.com"];
                };
                readonly mobile: {
                    readonly type: "string";
                    readonly description: "The end-users mobile number.";
                    readonly examples: readonly [61410888999];
                };
                readonly firstName: {
                    readonly type: "string";
                    readonly description: "The end-users first name as an optional additional parameter.";
                    readonly examples: readonly ["Gavin"];
                };
                readonly middleName: {
                    readonly type: "string";
                    readonly description: "The end-users middle name as an optional additional parameter.";
                    readonly examples: readonly ["middle name"];
                };
                readonly lastName: {
                    readonly type: "string";
                    readonly description: "The end-users last name as an optional additional parameter.";
                    readonly examples: readonly ["Belson"];
                };
                readonly businessName: {
                    readonly type: "string";
                    readonly description: "The official name of the business.";
                    readonly examples: readonly ["Manly Accounting PTY LTD"];
                };
                readonly businessIdNo: {
                    readonly type: "string";
                    readonly description: "This number is used to identify a business when they’re dealing with the government, other businesses, and the public.";
                    readonly examples: readonly ["16 7645 892"];
                };
                readonly businessIdNoType: {
                    readonly type: "string";
                    readonly description: "Type of business ID could be ABN Or ACN.\n\n`ABN` `ACN`";
                    readonly enum: readonly ["ABN", "ACN"];
                    readonly examples: readonly ["ABN"];
                };
                readonly businessAddress: {
                    readonly type: "object";
                    readonly properties: {
                        readonly addressLine1: {
                            readonly type: "string";
                            readonly description: "The first line of the business address.";
                            readonly examples: readonly ["21 Sydney Rd"];
                        };
                        readonly addressLine2: {
                            readonly type: "string";
                            readonly description: "Additional information about the business address (optional).";
                            readonly examples: readonly [""];
                        };
                        readonly suburb: {
                            readonly type: "string";
                            readonly description: "The suburb or locality where the business is located.";
                            readonly examples: readonly ["Manly"];
                        };
                        readonly state: {
                            readonly type: "string";
                            readonly description: "The state or territory where the business is located.";
                            readonly examples: readonly ["NSW"];
                        };
                        readonly postcode: {
                            readonly type: "string";
                            readonly description: "The postal code of the business location.";
                            readonly examples: readonly ["2095"];
                        };
                        readonly countryCode: {
                            readonly type: "string";
                            readonly description: "The country code of the business location.";
                            readonly examples: readonly ["AUS"];
                        };
                    };
                };
                readonly verificationStatus: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the business information provided is verified against the Australian Business Register.";
                };
                readonly verificationDate: {
                    readonly type: "string";
                    readonly description: "when the verification was done.";
                    readonly examples: readonly ["12/01/2024"];
                };
                readonly links: {
                    readonly title: "ResourceLink";
                    readonly required: readonly ["self"];
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly description: "URL of the resource.";
                            readonly examples: readonly ["https://au-api.basiq.io/link/a3dgf4567a89"];
                        };
                    };
                    readonly description: "Link object containing a link to the resource, self reference.";
                };
            };
            readonly description: "User object with details if the creation succeeded.";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteAuthLink: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of the user.";
                };
            };
            readonly required: readonly ["userId"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "object";
                                readonly description: "Application-specific error code, expressed as a string value.";
                                readonly examples: readonly ["service-unavailable"];
                                readonly additionalProperties: true;
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Service Unavailable. Try again later."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Service Unavailable"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteConsent: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User identification.";
                };
                readonly consentId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Consent identification.";
                };
            };
            readonly required: readonly ["userId", "consentId"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "object";
                                readonly description: "Application-specific error code, expressed as a string value.";
                                readonly examples: readonly ["service-unavailable"];
                                readonly additionalProperties: true;
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Service Unavailable. Try again later."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Service Unavailable"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteUser: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User identification.";
                };
            };
            readonly required: readonly ["userId"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "object";
                                readonly description: "Application-specific error code, expressed as a string value.";
                                readonly examples: readonly ["service-unavailable"];
                                readonly additionalProperties: true;
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Service Unavailable. Try again later."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Service Unavailable"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAuthLink: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of the user.";
                };
            };
            readonly required: readonly ["userId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["expiresAt", "id", "mobile", "type", "userId"];
            readonly type: "object";
            readonly properties: {
                readonly expiresAt: {
                    readonly type: "string";
                    readonly description: "The date time of auth link expiry.";
                    readonly examples: readonly ["2019-11-21T04:08:50.000Z"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "Uniquely identifies the auth link.";
                    readonly examples: readonly ["63448be4"];
                };
                readonly links: {
                    readonly required: readonly ["public", "self"];
                    readonly type: "object";
                    readonly properties: {
                        readonly public: {
                            readonly type: "string";
                            readonly description: "Public URL of auth link.";
                            readonly examples: readonly ["https://connect.basiq.io/63448be4"];
                        };
                        readonly self: {
                            readonly type: "string";
                            readonly description: "URL of the resource";
                            readonly examples: readonly ["/users/ec4ea48d/auth_link"];
                        };
                    };
                };
                readonly mobile: {
                    readonly type: "string";
                    readonly description: "A user's mobile phone, used as for authentication.";
                    readonly examples: readonly [61410000000];
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of the response, always \"auth_link\".";
                    readonly examples: readonly ["auth_link"];
                };
                readonly userId: {
                    readonly type: "string";
                    readonly description: "A string that uniquely identifies the user.";
                    readonly examples: readonly ["ec4ea48d"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-no-longer-available`";
                                readonly enum: readonly ["resource-no-longer-available"];
                                readonly examples: readonly ["resource-no-longer-available"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "object";
                                readonly description: "Application-specific error code, expressed as a string value.";
                                readonly examples: readonly ["service-unavailable"];
                                readonly additionalProperties: true;
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Service Unavailable. Try again later."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Service Unavailable"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetConsents: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of the user";
                };
            };
            readonly required: readonly ["userId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly created: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly expiryDate: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "active, revoked and expired";
                };
                readonly purpose: {
                    readonly type: "object";
                    readonly additionalProperties: false;
                    readonly properties: {
                        readonly primary: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                            readonly properties: {
                                readonly title: {
                                    readonly type: "string";
                                };
                                readonly description: {
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["description", "title"];
                            readonly title: "Primary";
                        };
                    };
                    readonly required: readonly ["primary"];
                    readonly title: "Purpose";
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: false;
                    readonly properties: {
                        readonly retainData: {
                            readonly type: "boolean";
                        };
                        readonly permissions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: false;
                                readonly properties: {
                                    readonly scope: {
                                        readonly type: "string";
                                    };
                                    readonly required: {
                                        readonly type: "boolean";
                                    };
                                    readonly entity: {
                                        readonly type: "string";
                                    };
                                    readonly information: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly description: {
                                                readonly type: "string";
                                            };
                                            readonly attributeList: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly required: readonly ["attributeList", "description", "name"];
                                        readonly title: "Information";
                                    };
                                    readonly purpose: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                        readonly properties: {
                                            readonly title: {
                                                readonly type: "string";
                                            };
                                            readonly description: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["description", "title"];
                                        readonly title: "Primary";
                                    };
                                };
                                readonly required: readonly ["entity", "information", "purpose", "required", "scope"];
                                readonly title: "Permission";
                            };
                        };
                    };
                    readonly required: readonly ["permissions", "retainData"];
                    readonly title: "Data";
                };
                readonly revoked: {
                    readonly type: "string";
                    readonly description: "To indicate when a user consent was revoked.";
                };
                readonly links: {
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly required: readonly ["created", "data", "expiryDate", "id", "purpose", "status", "type", "updated"];
            readonly title: "UserConsentGetResponse";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetEventTypeById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["user.created"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "Identifer of the event type";
                    readonly examples: readonly ["user.created"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "a brief description of the event type";
                    readonly examples: readonly ["when a user is created"];
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly correlationId: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly detail: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly correlationId: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly detail: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly correlationId: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly detail: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly correlationId: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly detail: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "object";
                                readonly description: "Application-specific error code, expressed as a string value.";
                                readonly examples: readonly ["service-unavailable"];
                                readonly additionalProperties: true;
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Service Unavailable. Try again later."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Service Unavailable"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetEvents: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly filter: {
                    readonly type: "string";
                    readonly examples: readonly ["user.id.eq(userId) OR event.entity.eq(entity), event.type.eq(type)"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retrieves the details of all events associated with a user.\n\n**Note:** This endpoint only returns events that happened in the last 7 days.\n\n**Filtering Options:**\n- `userId`: User ID for the specific user you wish to retrieve events for. e.g., `user.id.eq(userId)`\n- `entity`: Filter events by entity type. e.g., `event.entity.eq(entity)`\n- `type`: Filter events by event type. e.g., `event.type.eq(type)`\n";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "EventsGetResponseResource";
            readonly required: readonly ["type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type, always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["createdDate", "id", "links", "type", "entity", "userId", "dataRef", "data", "eventType"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type, always \"event\".";
                                readonly examples: readonly ["event"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Event identification.";
                                readonly examples: readonly ["61723"];
                            };
                            readonly createdDate: {
                                readonly type: "string";
                                readonly description: "Date the event was created.";
                                readonly examples: readonly ["2019-07-29T07:34:09Z"];
                            };
                            readonly entity: {
                                readonly type: "string";
                                readonly description: "The entity associated with the event that has occurred\n\n`consent` `connection`";
                                readonly enum: readonly ["consent", "connection"];
                                readonly examples: readonly ["consent"];
                            };
                            readonly eventType: {
                                readonly type: "string";
                                readonly description: "The type of event that has occurred\n\n`revoked` `expired` `updated` `created` `archived` `deleted`";
                                readonly enum: readonly ["revoked", "expired", "updated", "created", "archived", "deleted"];
                                readonly examples: readonly ["revoked"];
                            };
                            readonly userId: {
                                readonly type: "string";
                                readonly description: "The identifier of the user the event belongs to.";
                                readonly examples: readonly ["266f5849-6ef6-4aae-accf-386470d0598e"];
                            };
                            readonly dataRef: {
                                readonly type: "string";
                                readonly description: "URL to the data source the event occurred.";
                                readonly examples: readonly ["https://au-api.basiq.io/users/266f5849-6ef6-4aae-accf-386470d0598e"];
                            };
                            readonly data: {
                                readonly type: "string";
                                readonly description: "The data associated with the event that has been created.";
                            };
                            readonly links: {};
                        };
                    };
                };
                readonly links: {
                    readonly title: "ResourceLink";
                    readonly required: readonly ["self"];
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly description: "URL of the resource.";
                            readonly examples: readonly ["https://au-api.basiq.io/link/a3dgf4567a89"];
                        };
                    };
                    readonly description: "Link object containing a link to the resource, self reference.";
                };
            };
            readonly description: "Object containing details for connections.";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "object";
                                readonly description: "Application-specific error code, expressed as a string value.";
                                readonly examples: readonly ["service-unavailable"];
                                readonly additionalProperties: true;
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Service Unavailable. Try again later."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Service Unavailable"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetJobs: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of the job to be retrieved.";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                    };
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly partnerId: {
                        readonly type: "string";
                    };
                    readonly status: {
                        readonly type: "string";
                    };
                    readonly jobType: {
                        readonly type: "string";
                    };
                    readonly applicationId: {
                        readonly type: "string";
                    };
                    readonly created: {
                        readonly description: "date and time in ISO format of when the job request was created";
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated: {
                        readonly description: "date and time in ISO format of when the job request was updated";
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly steps: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly title: {
                                    readonly type: "string";
                                };
                                readonly status: {
                                    readonly type: "string";
                                };
                                readonly result: {
                                    readonly type: readonly ["object", "null"];
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                        };
                                        readonly code: {
                                            readonly type: "string";
                                        };
                                        readonly title: {
                                            readonly type: "string";
                                        };
                                        readonly detail: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly links: {
                        readonly type: "object";
                        readonly properties: {
                            readonly link: {
                                readonly type: "string";
                            };
                            readonly self: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                    };
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly createdDate: {
                        readonly description: "date and time in ISO format of when the job request was created";
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updatedDate: {
                        readonly description: "date and time in ISO format of when the job request was updated";
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly jobType: {
                        readonly type: "string";
                    };
                    readonly sourceId: {
                        readonly type: "string";
                    };
                    readonly steps: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly title: {
                                    readonly type: "string";
                                };
                                readonly status: {
                                    readonly type: "string";
                                };
                                readonly result: {
                                    readonly type: readonly ["object", "null"];
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly links: {
                        readonly type: "object";
                        readonly properties: {
                            readonly link: {
                                readonly type: "string";
                            };
                            readonly self: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            }];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTypeById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["a0fa1d01e0c9a1032e29ac74ade5f786e880ae04f4e3788144c6d13b53e5d29b"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly id: {
                    readonly type: "string";
                };
                readonly createdDate: {
                    readonly type: "string";
                };
                readonly entity: {
                    readonly type: "string";
                };
                readonly eventType: {
                    readonly type: "string";
                };
                readonly userId: {
                    readonly type: "string";
                };
                readonly dataRef: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly createdDate: {
                            readonly type: "string";
                        };
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly institution: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly links: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly self: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly type: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly lastUsed: {
                            readonly type: "string";
                        };
                        readonly links: {
                            readonly type: "object";
                            readonly properties: {
                                readonly accounts: {
                                    readonly type: "string";
                                };
                                readonly self: {
                                    readonly type: "string";
                                };
                                readonly transactions: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly mfaEnabled: {
                            readonly type: "boolean";
                        };
                        readonly status: {
                            readonly type: "string";
                        };
                        readonly type: {
                            readonly type: "string";
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly correlationId: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly detail: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly correlationId: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly detail: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly correlationId: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly detail: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly correlationId: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly detail: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "object";
                                readonly description: "Application-specific error code, expressed as a string value.";
                                readonly examples: readonly ["service-unavailable"];
                                readonly additionalProperties: true;
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Service Unavailable. Try again later."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Service Unavailable"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUser: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of the user to be retrieved.";
                };
            };
            readonly required: readonly ["userId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "UserGetResponse";
            readonly required: readonly ["accounts", "connections", "email", "id", "links", "mobile", "name", "firstName", "middleName", "lastName", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"user\".";
                    readonly examples: readonly ["user"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "User identification.";
                    readonly examples: readonly ["ea3a81"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "User email or empty.";
                    readonly format: "email";
                    readonly examples: readonly ["gavin@hooli.com"];
                };
                readonly mobile: {
                    readonly type: "string";
                    readonly description: "User mobile number, or empty.";
                    readonly examples: readonly [61410888666];
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "Name, or empty.";
                    readonly examples: readonly [""];
                };
                readonly firstName: {
                    readonly type: "string";
                    readonly description: "firstName, or empty";
                    readonly examples: readonly ["Gavin"];
                };
                readonly middleName: {
                    readonly type: "string";
                    readonly description: "middleName, or empty";
                    readonly examples: readonly ["middleName"];
                };
                readonly lastName: {
                    readonly type: "string";
                    readonly description: "lastName, or empty";
                    readonly examples: readonly ["lastName"];
                };
                readonly businessName: {
                    readonly type: "string";
                    readonly description: "The official name of the business.";
                    readonly examples: readonly ["Manly Accounting PTY LTD"];
                };
                readonly businessIdNo: {
                    readonly type: "string";
                    readonly description: "This number is used to identify a business when they’re dealing with the government, other businesses, and the public.";
                    readonly examples: readonly ["16 7645 892"];
                };
                readonly businessIdNoType: {
                    readonly type: "string";
                    readonly description: "Type of business ID could be ABN Or ACN.\n\n`ABN` `ACN`";
                    readonly enum: readonly ["ABN", "ACN"];
                    readonly examples: readonly ["ABN"];
                };
                readonly businessAddress: {
                    readonly type: "object";
                    readonly properties: {
                        readonly addressLine1: {
                            readonly type: "string";
                            readonly description: "The first line of the business address.";
                            readonly examples: readonly ["21 Sydney Rd"];
                        };
                        readonly addressLine2: {
                            readonly type: "string";
                            readonly description: "Additional information about the business address (optional).";
                            readonly examples: readonly [""];
                        };
                        readonly suburb: {
                            readonly type: "string";
                            readonly description: "The suburb or locality where the business is located.";
                            readonly examples: readonly ["Manly"];
                        };
                        readonly state: {
                            readonly type: "string";
                            readonly description: "The state or territory where the business is located.";
                            readonly examples: readonly ["NSW"];
                        };
                        readonly postcode: {
                            readonly type: "string";
                            readonly description: "The postal code of the business location.";
                            readonly examples: readonly ["2095"];
                        };
                        readonly countryCode: {
                            readonly type: "string";
                            readonly description: "The country code of the business location.";
                            readonly examples: readonly ["AUS"];
                        };
                    };
                };
                readonly verificationStatus: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the business information provided is verified against the Australian Business Register.";
                };
                readonly verificationDate: {
                    readonly type: "string";
                    readonly description: "when the verification was done.";
                    readonly examples: readonly ["12/01/2024"];
                };
                readonly connections: {
                    readonly title: "UserGetConnection";
                    readonly required: readonly ["count", "data", "type"];
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Always \"list\".";
                            readonly examples: readonly ["list"];
                        };
                        readonly count: {
                            readonly type: "integer";
                            readonly description: "Count of accounts.";
                            readonly format: "int64";
                            readonly examples: readonly [5];
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly description: "Connections data.";
                            readonly items: {
                                readonly title: "GetUserConnectionData";
                                readonly required: readonly ["id", "links", "type"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Always \"connection\".";
                                        readonly examples: readonly ["connection"];
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "Connection identification.";
                                        readonly examples: readonly ["aaaf2c3b"];
                                    };
                                    readonly links: {
                                        readonly title: "ResourceLink";
                                        readonly required: readonly ["self"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly self: {
                                                readonly type: "string";
                                                readonly description: "URL of the resource.";
                                                readonly examples: readonly ["https://au-api.basiq.io/link/a3dgf4567a89"];
                                            };
                                        };
                                        readonly description: "Link object containing a link to the resource, self reference.";
                                    };
                                };
                                readonly description: "Object containing connection data.";
                            };
                        };
                    };
                    readonly description: "Container object containing connection data.";
                };
                readonly accounts: {
                    readonly title: "UserGetAccount";
                    readonly required: readonly ["count", "data", "type"];
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Always \"list\".";
                            readonly examples: readonly ["list"];
                        };
                        readonly count: {
                            readonly type: "integer";
                            readonly description: "Count of accounts.";
                            readonly format: "int64";
                            readonly examples: readonly [7];
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly description: "Accounts data.";
                            readonly items: {
                                readonly title: "UserGetAccountData";
                                readonly required: readonly ["id", "links", "type"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Always \"account\".";
                                        readonly examples: readonly ["account"];
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "Account identification.";
                                        readonly examples: readonly ["aaaf2c3b"];
                                    };
                                    readonly links: {
                                        readonly title: "ResourceLink";
                                        readonly required: readonly ["self"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly self: {
                                                readonly type: "string";
                                                readonly description: "URL of the resource.";
                                                readonly examples: readonly ["https://au-api.basiq.io/link/a3dgf4567a89"];
                                            };
                                        };
                                        readonly description: "Link object containing a link to the resource, self reference.";
                                    };
                                };
                                readonly description: "Object containing account data.";
                            };
                        };
                    };
                    readonly description: "Container object containing account data.";
                };
                readonly links: {
                    readonly title: "GetUserLinks";
                    readonly required: readonly ["accounts", "auth_link", "connections", "self", "transactions"];
                    readonly type: "object";
                    readonly properties: {
                        readonly accounts: {
                            readonly type: "string";
                            readonly description: "Accounts reference url.";
                            readonly examples: readonly ["https://au-api.basiq.io/users/a3dgf4567a89/accounts"];
                        };
                        readonly connections: {
                            readonly type: "string";
                            readonly description: "Connections reference url.";
                            readonly examples: readonly ["https://au-api.basiq.io/users/a3dgf4567a89/connections"];
                        };
                        readonly self: {
                            readonly type: "string";
                            readonly description: "User self reference url.";
                            readonly examples: readonly ["https://au-api.basiq.io/user/a3dgf4567a89"];
                        };
                        readonly transactions: {
                            readonly type: "string";
                            readonly description: "Transactions reference url.";
                            readonly examples: readonly ["https://au-api.basiq.io/users/a3dgf4567a89/transactions"];
                        };
                    };
                    readonly description: "Object containing links to resources.";
                };
            };
            readonly description: "User object with details if the creation succeeded.";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUserJobs: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User identifier";
                };
            };
            readonly required: readonly ["userId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly filter: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Connection identification filter. e.g. connection.id.eq('ab63cd')";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["data", "links", "size", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of the response, always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Container object, containing job details.";
                    readonly items: {
                        readonly title: "JobsData";
                        readonly required: readonly ["created", "id", "institution", "steps", "updated"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Value is \"job\".";
                                readonly examples: readonly ["job"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "A string that uniquely identifies the job.";
                                readonly examples: readonly ["e9132638"];
                            };
                            readonly created: {
                                readonly type: "string";
                                readonly description: "The date time when the job was created.";
                                readonly examples: readonly ["2020-06-10T09:59:00Z"];
                            };
                            readonly updated: {
                                readonly type: "string";
                                readonly description: "The date time when the job was last updated.";
                                readonly examples: readonly ["2020-06-10T09:59:00Z"];
                            };
                            readonly institution: {
                                readonly title: "Institution";
                                readonly required: readonly ["id", "links", "type"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "A string that uniquely identifies institution.";
                                        readonly examples: readonly ["AU00000"];
                                    };
                                    readonly links: {
                                        readonly title: "JobsLinks";
                                        readonly required: readonly ["self"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly self: {
                                                readonly type: "string";
                                                readonly description: "URL of the resource";
                                                readonly examples: readonly ["https://au-api.basiq.io/jobs/61723"];
                                            };
                                            readonly source: {
                                                readonly type: "string";
                                                readonly description: "Resource that initiated creation of this Job. For example, for operations on Connection, this is a Connection URL. This is only returned for Connection jobs and not for Statement jobs.";
                                                readonly examples: readonly ["https://au-api.basiq.io/users/ea3a81/connections/8fce3b"];
                                            };
                                        };
                                        readonly description: "Links to the resources.";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Always \"institution\".";
                                        readonly examples: readonly ["institution"];
                                    };
                                };
                                readonly description: "Institution details.";
                            };
                            readonly steps: {
                                readonly type: "array";
                                readonly description: "List of steps that need to be completed.";
                                readonly items: {
                                    readonly title: "JobsStep";
                                    readonly required: readonly ["result", "status"];
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly title: {
                                            readonly type: "string";
                                            readonly description: "Name of the step the job needs to complete.\n\n`verify-credentials` `retrieve-accounts` `retrieve-transactions` `retrieve-statements`";
                                            readonly enum: readonly ["verify-credentials", "retrieve-accounts", "retrieve-transactions", "retrieve-statements"];
                                            readonly examples: readonly ["retrieve-accounts"];
                                        };
                                        readonly status: {
                                            readonly type: "string";
                                            readonly description: "Status of the job step\n\n`pending` `in-progress` `success` `failed`";
                                            readonly enum: readonly ["pending", "in-progress", "success", "failed"];
                                            readonly examples: readonly ["success"];
                                        };
                                        readonly result: {
                                            readonly title: "JobsResult";
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly code: {
                                                    readonly type: "string";
                                                    readonly description: "In case of failed job, displays error code.\n\n`success` `user-action-required` `system-unavailable` `maintenance` `connector-error` `institution-not-found` `institution-not-available` `institution-disabled` `missing-required-field` `missing-required-field-value` `invalid-field-value` `invalid-csv-row` `row-count-exceeded` `account-data-differs` `empty-file` `bank-statement-invalid` `bank-statement-new-product` `bank-statement-parsing-error` `bank-statement-not-supported` `txn-after-last-updated-date` `invalid-connection` `unknown-error` `job-timed-out`";
                                                    readonly enum: readonly ["success", "user-action-required", "system-unavailable", "maintenance", "connector-error", "institution-not-found", "institution-not-available", "institution-disabled", "missing-required-field", "missing-required-field-value", "invalid-field-value", "invalid-csv-row", "row-count-exceeded", "account-data-differs", "empty-file", "bank-statement-invalid", "bank-statement-new-product", "bank-statement-parsing-error", "bank-statement-not-supported", "txn-after-last-updated-date", "invalid-connection", "unknown-error", "job-timed-out"];
                                                };
                                                readonly details: {
                                                    readonly type: "string";
                                                    readonly description: "In case of failed job, displays details of the error.";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                    readonly description: "In case of failed job, displays error title.";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly description: "In case of success, Always \"link\".";
                                                    readonly examples: readonly ["link"];
                                                };
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "In case of success, URL of the updated (or created) resources.";
                                                };
                                            };
                                            readonly description: "Result object containing a list of URLs or null. Otherwise if a step failed contains an error response.";
                                        };
                                    };
                                    readonly description: "List of steps that need to be completed.";
                                };
                            };
                            readonly links: {
                                readonly title: "JobsLinks";
                                readonly required: readonly ["self"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly self: {
                                        readonly type: "string";
                                        readonly description: "URL of the resource";
                                        readonly examples: readonly ["https://au-api.basiq.io/jobs/61723"];
                                    };
                                    readonly source: {
                                        readonly type: "string";
                                        readonly description: "Resource that initiated creation of this Job. For example, for operations on Connection, this is a Connection URL. This is only returned for Connection jobs and not for Statement jobs.";
                                        readonly examples: readonly ["https://au-api.basiq.io/users/ea3a81/connections/8fce3b"];
                                    };
                                };
                                readonly description: "Links to the resources.";
                            };
                        };
                        readonly description: "Container object, containing job details.";
                    };
                };
                readonly size: {
                    readonly type: "integer";
                    readonly description: "Size of the all the jobs.";
                    readonly format: "int64";
                    readonly examples: readonly [100];
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly links: {
                    readonly title: "ResourceLink";
                    readonly required: readonly ["self"];
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly description: "URL of the resource.";
                            readonly examples: readonly ["https://au-api.basiq.io/link/a3dgf4567a89"];
                        };
                    };
                    readonly description: "Link object containing a link to the resource, self reference.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListEventTypes: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly count: {
                    readonly type: "integer";
                };
                readonly size: {
                    readonly type: "integer";
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "one or more events that the webhook would send messages for.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Identifer of the event type";
                                readonly examples: readonly ["user.created"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "a brief description of the event type";
                                readonly examples: readonly ["when a user is created"];
                            };
                            readonly links: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly self: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                        };
                        readonly next: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly correlationId: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly detail: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly correlationId: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly detail: {
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "object";
                                readonly description: "Application-specific error code, expressed as a string value.";
                                readonly examples: readonly ["service-unavailable"];
                                readonly additionalProperties: true;
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Service Unavailable. Try again later."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Service Unavailable"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostAuthLink: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly mobile: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["userId"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly required: readonly ["expiresAt", "mobile", "type", "userId"];
            readonly type: "object";
            readonly properties: {
                readonly expiresAt: {
                    readonly type: "string";
                    readonly description: "The date time of auth link expiry.";
                    readonly examples: readonly ["2019-11-21T04:08:50.000Z"];
                };
                readonly links: {
                    readonly required: readonly ["public", "self"];
                    readonly type: "object";
                    readonly properties: {
                        readonly public: {
                            readonly type: "string";
                            readonly description: "Public URL of auth link.";
                            readonly examples: readonly ["https://connect.basiq.io/63448be4"];
                        };
                        readonly self: {
                            readonly type: "string";
                            readonly description: "URL of the resource";
                            readonly examples: readonly ["/users/ec4ea48d/auth_link"];
                        };
                    };
                };
                readonly mobile: {
                    readonly type: "string";
                    readonly description: "A user's mobile phone, used as for authentication.";
                    readonly examples: readonly [61410000000];
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of the response, always \"auth_link\".";
                    readonly examples: readonly ["auth_link"];
                };
                readonly userId: {
                    readonly type: "string";
                    readonly description: "A string that uniquely identifies the user.";
                    readonly examples: readonly ["ec4ea48d"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostJobMfa: {
    readonly body: {
        readonly required: readonly ["mfa-response"];
        readonly type: "object";
        readonly properties: {
            readonly "mfa-response": {
                readonly type: "array";
                readonly description: "One time password or answer to a security question/s e.g. [\"1234\"]";
                readonly items: {
                    readonly type: "string";
                };
                readonly examples: readonly ["1234"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of the job.";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly title: "ConnectionResponseResource";
            readonly required: readonly ["id", "links", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type, always \"job\".";
                    readonly examples: readonly ["job"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "Job identification.";
                    readonly examples: readonly ["29523951"];
                };
                readonly links: {
                    readonly title: "ResourceLink";
                    readonly required: readonly ["self"];
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly description: "URL of the resource.";
                            readonly examples: readonly ["https://au-api.basiq.io/link/a3dgf4567a89"];
                        };
                    };
                    readonly description: "Link object containing a link to the resource, self reference.";
                };
            };
            readonly description: "Object containing details for connection post.";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostToken: {
    readonly formData: {
        readonly properties: {
            readonly scope: {
                readonly type: "string";
                readonly examples: readonly ["CLIENT_ACCESS"];
            };
            readonly userId: {
                readonly type: "string";
                readonly examples: readonly ["6dd30ce4-d4ba-11ec-9d64-0242ac120002"];
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "basiq-version": {
                    readonly type: "string";
                    readonly examples: readonly ["3.0"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["basiq-version"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["access_token", "expires_in", "token_type"];
            readonly type: "object";
            readonly properties: {
                readonly access_token: {
                    readonly type: "string";
                    readonly description: "The generated access token.";
                    readonly examples: readonly ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"];
                };
                readonly expires_in: {
                    readonly type: "integer";
                    readonly description: "Expires in 3600 seconds";
                    readonly format: "int64";
                    readonly examples: readonly [3600];
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                };
                readonly token_type: {
                    readonly type: "string";
                    readonly description: "This value will always be `Bearer`.";
                    readonly examples: readonly ["Bearer"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateUser: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "The end-users email address.";
                readonly examples: readonly ["gavin@hooli.com"];
            };
            readonly mobile: {
                readonly type: "string";
                readonly description: "The end-users mobile number.";
                readonly examples: readonly ["+61410888666"];
            };
            readonly firstName: {
                readonly type: "string";
                readonly description: "The end-users first name as an optional additional parameter.";
                readonly examples: readonly ["Malcolm"];
            };
            readonly middleName: {
                readonly type: "string";
                readonly description: "The end-users middle name as an optional additional parameter.";
                readonly examples: readonly ["Malcom middle name"];
            };
            readonly lastName: {
                readonly type: "string";
                readonly description: "The end-users last name as an optional additional parameter.";
                readonly examples: readonly ["Malcolm last name"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of the user to be retrieved.";
                };
            };
            readonly required: readonly ["userId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "UserPostResponse";
            readonly required: readonly ["id", "links", "mobile", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of the response, always \"user\".";
                    readonly examples: readonly ["user"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "A string that uniquely identifies the user.";
                    readonly examples: readonly ["e1956419"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "The end-users email address.";
                    readonly format: "email";
                    readonly examples: readonly ["gavin@hooli.com"];
                };
                readonly mobile: {
                    readonly type: "string";
                    readonly description: "The end-users mobile number.";
                    readonly examples: readonly [61410888999];
                };
                readonly firstName: {
                    readonly type: "string";
                    readonly description: "The end-users first name as an optional additional parameter.";
                    readonly examples: readonly ["Gavin"];
                };
                readonly middleName: {
                    readonly type: "string";
                    readonly description: "The end-users middle name as an optional additional parameter.";
                    readonly examples: readonly ["middle name"];
                };
                readonly lastName: {
                    readonly type: "string";
                    readonly description: "The end-users last name as an optional additional parameter.";
                    readonly examples: readonly ["Belson"];
                };
                readonly businessName: {
                    readonly type: "string";
                    readonly description: "The official name of the business.";
                    readonly examples: readonly ["Manly Accounting PTY LTD"];
                };
                readonly businessIdNo: {
                    readonly type: "string";
                    readonly description: "This number is used to identify a business when they’re dealing with the government, other businesses, and the public.";
                    readonly examples: readonly ["16 7645 892"];
                };
                readonly businessIdNoType: {
                    readonly type: "string";
                    readonly description: "Type of business ID could be ABN Or ACN.\n\n`ABN` `ACN`";
                    readonly enum: readonly ["ABN", "ACN"];
                    readonly examples: readonly ["ABN"];
                };
                readonly businessAddress: {
                    readonly type: "object";
                    readonly properties: {
                        readonly addressLine1: {
                            readonly type: "string";
                            readonly description: "The first line of the business address.";
                            readonly examples: readonly ["21 Sydney Rd"];
                        };
                        readonly addressLine2: {
                            readonly type: "string";
                            readonly description: "Additional information about the business address (optional).";
                            readonly examples: readonly [""];
                        };
                        readonly suburb: {
                            readonly type: "string";
                            readonly description: "The suburb or locality where the business is located.";
                            readonly examples: readonly ["Manly"];
                        };
                        readonly state: {
                            readonly type: "string";
                            readonly description: "The state or territory where the business is located.";
                            readonly examples: readonly ["NSW"];
                        };
                        readonly postcode: {
                            readonly type: "string";
                            readonly description: "The postal code of the business location.";
                            readonly examples: readonly ["2095"];
                        };
                        readonly countryCode: {
                            readonly type: "string";
                            readonly description: "The country code of the business location.";
                            readonly examples: readonly ["AUS"];
                        };
                    };
                };
                readonly verificationStatus: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the business information provided is verified against the Australian Business Register.";
                };
                readonly verificationDate: {
                    readonly type: "string";
                    readonly description: "when the verification was done.";
                    readonly examples: readonly ["12/01/2024"];
                };
                readonly links: {
                    readonly title: "ResourceLink";
                    readonly required: readonly ["self"];
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly description: "URL of the resource.";
                            readonly examples: readonly ["https://au-api.basiq.io/link/a3dgf4567a89"];
                        };
                    };
                    readonly description: "Link object containing a link to the resource, self reference.";
                };
            };
            readonly description: "User object with details if the creation succeeded.";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Parameter not valid."];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`parameter-not-supplied` `parameter-not-valid` `unsupported-accept` `invalid-content` `institution-not-supported` `invalid-credentials`";
                                readonly enum: readonly ["parameter-not-supplied", "parameter-not-valid", "unsupported-accept", "invalid-content", "institution-not-supported", "invalid-credentials"];
                                readonly examples: readonly ["parameter-not-valid"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["ID value is not valid."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`unauthorized-access` `invalid-authorization-token`";
                                readonly enum: readonly ["unauthorized-access", "invalid-authorization-token"];
                                readonly examples: readonly ["unauthorized-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["You are not authorized to access this resource"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Unauthorized Access"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "source", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Forbidden Access"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`forbidden-access` `no-production-access` `access-denied`";
                                readonly enum: readonly ["forbidden-access", "no-production-access", "access-denied"];
                                readonly examples: readonly ["forbidden-access"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Access to this resource is forbidden."];
                            };
                            readonly source: {
                                readonly title: "Source";
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "string";
                                        readonly description: "String indicating which URI query parameter caused the error.";
                                        readonly examples: readonly ["id"];
                                    };
                                };
                                readonly description: "An object containing references to the source of the error.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`resource-not-found`";
                                readonly enum: readonly ["resource-not-found"];
                                readonly examples: readonly ["resource-not-found"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Resource not found."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Requested resource is not found."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly required: readonly ["correlationId", "data", "type"];
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "Always \"list\".";
                    readonly examples: readonly ["list"];
                };
                readonly correlationId: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this particular occurrence of the problem.";
                    readonly examples: readonly ["ac5ah5i"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Error data.";
                    readonly items: {
                        readonly required: readonly ["code", "type"];
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Application-specific error code, expressed as a string value.\n\n`internal-server-error`";
                                readonly enum: readonly ["internal-server-error"];
                                readonly examples: readonly ["internal-server-error"];
                            };
                            readonly detail: {
                                readonly type: "string";
                                readonly description: "Human-readable explanation specific to this occurrence of the problem.";
                                readonly examples: readonly ["Internal Server error. Contact support."];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the error";
                                readonly examples: readonly ["Internal Server error."];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the response, always \"error\"";
                                readonly examples: readonly ["error"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { CreateUser, DeleteAuthLink, DeleteConsent, DeleteUser, GetAuthLink, GetConsents, GetEventTypeById, GetEvents, GetJobs, GetTypeById, GetUser, GetUserJobs, ListEventTypes, PostAuthLink, PostJobMfa, PostToken, UpdateUser };
