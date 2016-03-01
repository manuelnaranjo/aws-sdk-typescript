// Type definitions for aws-sdk
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

declare module "aws-sdk" {

	export var config: ClientConfig;

	export function Config(json: any): void;

	export class Credentials {
		constructor(accessKeyId: string, secretAccessKey: string, sessionToken?: string);
		accessKeyId: string;
		expired: boolean;
		expireTime: Date;
		expiryWindow: number;
		secretAccessKey: string;
		sessionToken: string;
		get(callback: (err?:Error) => void): void;
		needsRefresh(): boolean;
		refresh(callback: (err?:Error) => void): void;
	}

	export interface Logger {
		write?: (chunk: any, encoding?: string, callback?: () => void) => void;
		log?: (...messages: any[]) => void;
	}

	export interface HttpOptions {
		proxy?: string;
		agent?: any;
		timeout?: number;
		xhrAsync?: boolean;
		xhrWithCredentials?: boolean;
	}

	export interface Services {
		httpOptions?: HttpOptions;
		acm?: any;
		apigateway?: any;
		autoscaling?: any;
		cloudformation?: any;
		cloudfront?: any;
		cloudhsm?: any;
		cloudsearch?: any;
		cloudsearchdomain?: any;
		cloudtrail?: any;
		cloudwatch?: any;
		cloudwatchevents?: any;
		cloudwatchlogs?: any;
		codecommit?: any;
		codedeploy?: any;
		codepipeline?: any;
		cognitoidentity?: any;
		cognitosync?: any;
		configservice?: any;
		datapipeline?: any;
		devicefarm?: any;
		directconnect?: any;
		directoryservice?: any;
		dynamodb?: any;
		dynamodbstreams?: any;
		ec2?: any;
		ecr?: any;
		ecs?: any;
		efs?: any;
		elasticache?: any;
		elasticbeanstalk?: any;
		elb?: any;
		emr?: any;
		es?: any;
		elastictranscoder?: any;
		firehose?: any;
		gamelift?: any;
		glacier?: any;
		iam?: any;
		importexport?: any;
		inspector?: any;
		iot?: any;
		iotdata?: any;
		kinesis?: any;
		kms?: any;
		lambda?: any;
		machinelearning?: any;
		marketplacecommerceanalytics?: any;
		mobileanalytics?: any;
		opsworks?: any;
		rds?: any;
		redshift?: any;
		route53?: any;
		route53domains?: any;
		s3?: any;
		ses?: any;
		simpledb?: any;
		sns?: any;
		sqs?: any;
		ssm?: any;
		storagegateway?: any;
		sts?: any;
		support?: any;
		swf?: any;
		waf?: any;
		workspaces?: any;
  }

	export interface ClientConfigPartial extends Services {
		credentials?: Credentials;
		region?: string;
		computeChecksums?: boolean;
		convertResponseTypes?: boolean;
		logger?: Logger;
		maxRedirects?: number;
		maxRetries?: number;
		paramValidation?: boolean;
		s3ForcePathStyle?: boolean;
		apiVersion?: any;
		apiVersions?: Services;
		signatureVersion?: string;
		sslEnabled?: boolean;
		systemClockOffset?: number;
	}

	export interface ClientConfig extends ClientConfigPartial {
		update?: (options: ClientConfigPartial, allUnknownKeys?: boolean) => void;
		getCredentials?: (callback: (err?: any) => void) => void ;
		loadFromPath?: (path: string) => void;
		credentials: Credentials;
		region: string;
	}

	export class Endpoint {
		constructor(endpoint:string);

		host:string;
		hostname:string;
		href:string;
		port:number;
		protocol:string;
	}

	export class Service {
		apiVersions:string[];
		makeRequest(operation:string, params:Object, callback:(error?:Error, data?:any) => void): void;
		makeUnauthenticatedRequest(operation:string, params:Object, callback: (error?:Error, data?:any) => void): void;
		setupRequestListeners(): void;
		waitFor(state:string, params:Object, callback:(error?:Error, data?:any) => void): void;
	}

  export module CognitoIdentity {
    export interface CognitoIdentity.CognitoIdentityCredentialsParams {
      IdentityPoolId?: string;
      AccountId?: string;
      Logins?: [k: string]: any;

      RoleArn?: string;
      RoleSessionName?: string;
      WebIdentityToken?: string;
      ProviderId?: string;
      Policy?: string;
      DurationSeconds?: number;

      IdentityId?: string;
    }
  }

	export class CognitoIdentityCredentials extends Credentials {
	  constructor(params: CognitoIdentity.CognitoIdentityCredentialsParams);
	}

  export class Request extends EventEmitter {
		constructor(service:Service, operation:string, params:Object);

		on(event: string, listener: Function):Request;
		httpRequest: HttpRequest;
		startTime: Date;
		abort(): Request;
		createReadStream(): ReadableStream;
		eachItem(callback:Function): void;
		eachPage(callback: (err:Error, data:any, done?:() => void) => boolean|void): void;
		isPageable(): boolean;
		send(callback?: (err:Error, data:any) => void): void;

    }

	export class HttpRequest {
		body: string;
		endpoint: Endpoint;
		headers: {[index:string]: string};
		method: string;
		path: string;
		pathName(): string;
		search(): string;
	}

	/*
	 * Node-compatible interfaces
	 */
	export class EventEmitter {
        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
    }

    export interface ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
    }

    export interface WritableStream extends EventEmitter {
        writable: boolean;
        write: Function;
        end: Function;
    }

}

