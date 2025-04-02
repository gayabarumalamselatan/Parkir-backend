
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model member
 * 
 */
export type member = $Result.DefaultSelection<Prisma.$memberPayload>
/**
 * Model menu
 * 
 */
export type menu = $Result.DefaultSelection<Prisma.$menuPayload>
/**
 * Model module
 * 
 */
export type module = $Result.DefaultSelection<Prisma.$modulePayload>
/**
 * Model permission
 * 
 */
export type permission = $Result.DefaultSelection<Prisma.$permissionPayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.member`: Exposes CRUD operations for the **member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.memberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.moduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.permissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    member: 'member',
    menu: 'menu',
    module: 'module',
    permission: 'permission',
    role: 'role',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "member" | "menu" | "module" | "permission" | "role" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      member: {
        payload: Prisma.$memberPayload<ExtArgs>
        fields: Prisma.memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findFirst: {
            args: Prisma.memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findMany: {
            args: Prisma.memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          create: {
            args: Prisma.memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          createMany: {
            args: Prisma.memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.memberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          delete: {
            args: Prisma.memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          update: {
            args: Prisma.memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          deleteMany: {
            args: Prisma.memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.memberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          upsert: {
            args: Prisma.memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.memberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      menu: {
        payload: Prisma.$menuPayload<ExtArgs>
        fields: Prisma.menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findFirst: {
            args: Prisma.menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findMany: {
            args: Prisma.menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          create: {
            args: Prisma.menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          createMany: {
            args: Prisma.menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.menuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          delete: {
            args: Prisma.menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          update: {
            args: Prisma.menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          deleteMany: {
            args: Prisma.menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.menuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          upsert: {
            args: Prisma.menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.menuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      module: {
        payload: Prisma.$modulePayload<ExtArgs>
        fields: Prisma.moduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          findFirst: {
            args: Prisma.moduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          findMany: {
            args: Prisma.moduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          create: {
            args: Prisma.moduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          createMany: {
            args: Prisma.moduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.moduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          delete: {
            args: Prisma.moduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          update: {
            args: Prisma.moduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          deleteMany: {
            args: Prisma.moduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.moduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.moduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          upsert: {
            args: Prisma.moduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.moduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.moduleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      permission: {
        payload: Prisma.$permissionPayload<ExtArgs>
        fields: Prisma.permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          findFirst: {
            args: Prisma.permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          findMany: {
            args: Prisma.permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>[]
          }
          create: {
            args: Prisma.permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          createMany: {
            args: Prisma.permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.permissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>[]
          }
          delete: {
            args: Prisma.permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          update: {
            args: Prisma.permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          deleteMany: {
            args: Prisma.permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.permissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>[]
          }
          upsert: {
            args: Prisma.permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.permissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    member?: memberOmit
    menu?: menuOmit
    module?: moduleOmit
    permission?: permissionOmit
    role?: roleOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    permission: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | MenuCountOutputTypeCountPermissionArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permissionWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    menu: number
    permission: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | ModuleCountOutputTypeCountMenuArgs
    permission?: boolean | ModuleCountOutputTypeCountPermissionArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permissionWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    permission: number
    user: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | RoleCountOutputTypeCountPermissionArgs
    user?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permissionWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Models
   */

  /**
   * Model member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
    bulanan: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
    bulanan: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    nomor_polisi: string | null
    nomor_pengganti: string | null
    nama_pemilik: string | null
    nomor_hp: string | null
    tanggal_masuk: Date | null
    bulanan: number | null
    keterangan: string | null
    is_black_list: boolean | null
    tanggal_kadaluarsa: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    nomor_polisi: string | null
    nomor_pengganti: string | null
    nama_pemilik: string | null
    nomor_hp: string | null
    tanggal_masuk: Date | null
    bulanan: number | null
    keterangan: string | null
    is_black_list: boolean | null
    tanggal_kadaluarsa: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    nomor_polisi: number
    nomor_pengganti: number
    nama_pemilik: number
    nomor_hp: number
    tanggal_masuk: number
    bulanan: number
    keterangan: number
    is_black_list: number
    tanggal_kadaluarsa: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
    bulanan?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
    bulanan?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    nomor_polisi?: true
    nomor_pengganti?: true
    nama_pemilik?: true
    nomor_hp?: true
    tanggal_masuk?: true
    bulanan?: true
    keterangan?: true
    is_black_list?: true
    tanggal_kadaluarsa?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    nomor_polisi?: true
    nomor_pengganti?: true
    nama_pemilik?: true
    nomor_hp?: true
    tanggal_masuk?: true
    bulanan?: true
    keterangan?: true
    is_black_list?: true
    tanggal_kadaluarsa?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    nomor_polisi?: true
    nomor_pengganti?: true
    nama_pemilik?: true
    nomor_hp?: true
    tanggal_masuk?: true
    bulanan?: true
    keterangan?: true
    is_black_list?: true
    tanggal_kadaluarsa?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member to aggregate.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memberWhereInput
    orderBy?: memberOrderByWithAggregationInput | memberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    nomor_polisi: string
    nomor_pengganti: string
    nama_pemilik: string
    nomor_hp: string
    tanggal_masuk: Date
    bulanan: number
    keterangan: string
    is_black_list: boolean
    tanggal_kadaluarsa: Date
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomor_polisi?: boolean
    nomor_pengganti?: boolean
    nama_pemilik?: boolean
    nomor_hp?: boolean
    tanggal_masuk?: boolean
    bulanan?: boolean
    keterangan?: boolean
    is_black_list?: boolean
    tanggal_kadaluarsa?: boolean
  }, ExtArgs["result"]["member"]>

  export type memberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomor_polisi?: boolean
    nomor_pengganti?: boolean
    nama_pemilik?: boolean
    nomor_hp?: boolean
    tanggal_masuk?: boolean
    bulanan?: boolean
    keterangan?: boolean
    is_black_list?: boolean
    tanggal_kadaluarsa?: boolean
  }, ExtArgs["result"]["member"]>

  export type memberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomor_polisi?: boolean
    nomor_pengganti?: boolean
    nama_pemilik?: boolean
    nomor_hp?: boolean
    tanggal_masuk?: boolean
    bulanan?: boolean
    keterangan?: boolean
    is_black_list?: boolean
    tanggal_kadaluarsa?: boolean
  }, ExtArgs["result"]["member"]>

  export type memberSelectScalar = {
    id?: boolean
    nomor_polisi?: boolean
    nomor_pengganti?: boolean
    nama_pemilik?: boolean
    nomor_hp?: boolean
    tanggal_masuk?: boolean
    bulanan?: boolean
    keterangan?: boolean
    is_black_list?: boolean
    tanggal_kadaluarsa?: boolean
  }

  export type memberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomor_polisi" | "nomor_pengganti" | "nama_pemilik" | "nomor_hp" | "tanggal_masuk" | "bulanan" | "keterangan" | "is_black_list" | "tanggal_kadaluarsa", ExtArgs["result"]["member"]>

  export type $memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomor_polisi: string
      nomor_pengganti: string
      nama_pemilik: string
      nomor_hp: string
      tanggal_masuk: Date
      bulanan: number
      keterangan: string
      is_black_list: boolean
      tanggal_kadaluarsa: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type memberGetPayload<S extends boolean | null | undefined | memberDefaultArgs> = $Result.GetResult<Prisma.$memberPayload, S>

  type memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<memberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member'], meta: { name: 'member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {memberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memberFindUniqueArgs>(args: SelectSubset<T, memberFindUniqueArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {memberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memberFindUniqueOrThrowArgs>(args: SelectSubset<T, memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memberFindFirstArgs>(args?: SelectSubset<T, memberFindFirstArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memberFindFirstOrThrowArgs>(args?: SelectSubset<T, memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends memberFindManyArgs>(args?: SelectSubset<T, memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {memberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends memberCreateArgs>(args: SelectSubset<T, memberCreateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {memberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memberCreateManyArgs>(args?: SelectSubset<T, memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {memberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends memberCreateManyAndReturnArgs>(args?: SelectSubset<T, memberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {memberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends memberDeleteArgs>(args: SelectSubset<T, memberDeleteArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {memberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memberUpdateArgs>(args: SelectSubset<T, memberUpdateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {memberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memberDeleteManyArgs>(args?: SelectSubset<T, memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memberUpdateManyArgs>(args: SelectSubset<T, memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {memberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends memberUpdateManyAndReturnArgs>(args: SelectSubset<T, memberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {memberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends memberUpsertArgs>(args: SelectSubset<T, memberUpsertArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends memberCountArgs>(
      args?: Subset<T, memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memberGroupByArgs['orderBy'] }
        : { orderBy?: memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member model
   */
  readonly fields: memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the member model
   */ 
  interface memberFieldRefs {
    readonly id: FieldRef<"member", 'Int'>
    readonly nomor_polisi: FieldRef<"member", 'String'>
    readonly nomor_pengganti: FieldRef<"member", 'String'>
    readonly nama_pemilik: FieldRef<"member", 'String'>
    readonly nomor_hp: FieldRef<"member", 'String'>
    readonly tanggal_masuk: FieldRef<"member", 'DateTime'>
    readonly bulanan: FieldRef<"member", 'Int'>
    readonly keterangan: FieldRef<"member", 'String'>
    readonly is_black_list: FieldRef<"member", 'Boolean'>
    readonly tanggal_kadaluarsa: FieldRef<"member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * member findUnique
   */
  export type memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findUniqueOrThrow
   */
  export type memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findFirst
   */
  export type memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findFirstOrThrow
   */
  export type memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findMany
   */
  export type memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member create
   */
  export type memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * The data needed to create a member.
     */
    data: XOR<memberCreateInput, memberUncheckedCreateInput>
  }

  /**
   * member createMany
   */
  export type memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member createManyAndReturn
   */
  export type memberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member update
   */
  export type memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * The data needed to update a member.
     */
    data: XOR<memberUpdateInput, memberUncheckedUpdateInput>
    /**
     * Choose, which member to update.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member updateMany
   */
  export type memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
  }

  /**
   * member updateManyAndReturn
   */
  export type memberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
  }

  /**
   * member upsert
   */
  export type memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * The filter to search for the member to update in case it exists.
     */
    where: memberWhereUniqueInput
    /**
     * In case the member found by the `where` argument doesn't exist, create a new member with this data.
     */
    create: XOR<memberCreateInput, memberUncheckedCreateInput>
    /**
     * In case the member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memberUpdateInput, memberUncheckedUpdateInput>
  }

  /**
   * member delete
   */
  export type memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Filter which member to delete.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member deleteMany
   */
  export type memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: memberWhereInput
    /**
     * Limit how many members to delete.
     */
    limit?: number
  }

  /**
   * member without action
   */
  export type memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
  }


  /**
   * Model menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    module_id: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    module_id: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    module_id: number | null
    menu_name: string | null
    url: string | null
    element: string | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    module_id: number | null
    menu_name: string | null
    url: string | null
    element: string | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    module_id: number
    menu_name: number
    url: number
    element: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    module_id?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    module_id?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    module_id?: true
    menu_name?: true
    url?: true
    element?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    module_id?: true
    menu_name?: true
    url?: true
    element?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    module_id?: true
    menu_name?: true
    url?: true
    element?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu to aggregate.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuWhereInput
    orderBy?: menuOrderByWithAggregationInput | menuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: number
    module_id: number | null
    menu_name: string | null
    url: string | null
    element: string | null
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_id?: boolean
    menu_name?: boolean
    url?: boolean
    element?: boolean
    module?: boolean | menu$moduleArgs<ExtArgs>
    permission?: boolean | menu$permissionArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type menuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_id?: boolean
    menu_name?: boolean
    url?: boolean
    element?: boolean
    module?: boolean | menu$moduleArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type menuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_id?: boolean
    menu_name?: boolean
    url?: boolean
    element?: boolean
    module?: boolean | menu$moduleArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type menuSelectScalar = {
    id?: boolean
    module_id?: boolean
    menu_name?: boolean
    url?: boolean
    element?: boolean
  }

  export type menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "module_id" | "menu_name" | "url" | "element", ExtArgs["result"]["menu"]>
  export type menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | menu$moduleArgs<ExtArgs>
    permission?: boolean | menu$permissionArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type menuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | menu$moduleArgs<ExtArgs>
  }
  export type menuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | menu$moduleArgs<ExtArgs>
  }

  export type $menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu"
    objects: {
      module: Prisma.$modulePayload<ExtArgs> | null
      permission: Prisma.$permissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      module_id: number | null
      menu_name: string | null
      url: string | null
      element: string | null
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type menuGetPayload<S extends boolean | null | undefined | menuDefaultArgs> = $Result.GetResult<Prisma.$menuPayload, S>

  type menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu'], meta: { name: 'menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {menuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menuFindUniqueArgs>(args: SelectSubset<T, menuFindUniqueArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menuFindUniqueOrThrowArgs>(args: SelectSubset<T, menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menuFindFirstArgs>(args?: SelectSubset<T, menuFindFirstArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menuFindFirstOrThrowArgs>(args?: SelectSubset<T, menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menuFindManyArgs>(args?: SelectSubset<T, menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {menuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends menuCreateArgs>(args: SelectSubset<T, menuCreateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {menuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menuCreateManyArgs>(args?: SelectSubset<T, menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {menuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends menuCreateManyAndReturnArgs>(args?: SelectSubset<T, menuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu.
     * @param {menuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends menuDeleteArgs>(args: SelectSubset<T, menuDeleteArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {menuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menuUpdateArgs>(args: SelectSubset<T, menuUpdateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {menuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menuDeleteManyArgs>(args?: SelectSubset<T, menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menuUpdateManyArgs>(args: SelectSubset<T, menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {menuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends menuUpdateManyAndReturnArgs>(args: SelectSubset<T, menuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu.
     * @param {menuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends menuUpsertArgs>(args: SelectSubset<T, menuUpsertArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends menuCountArgs>(
      args?: Subset<T, menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menuGroupByArgs['orderBy'] }
        : { orderBy?: menuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu model
   */
  readonly fields: menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends menu$moduleArgs<ExtArgs> = {}>(args?: Subset<T, menu$moduleArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    permission<T extends menu$permissionArgs<ExtArgs> = {}>(args?: Subset<T, menu$permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the menu model
   */ 
  interface menuFieldRefs {
    readonly id: FieldRef<"menu", 'Int'>
    readonly module_id: FieldRef<"menu", 'Int'>
    readonly menu_name: FieldRef<"menu", 'String'>
    readonly url: FieldRef<"menu", 'String'>
    readonly element: FieldRef<"menu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * menu findUnique
   */
  export type menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findUniqueOrThrow
   */
  export type menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findFirst
   */
  export type menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findFirstOrThrow
   */
  export type menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findMany
   */
  export type menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu create
   */
  export type menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to create a menu.
     */
    data?: XOR<menuCreateInput, menuUncheckedCreateInput>
  }

  /**
   * menu createMany
   */
  export type menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu createManyAndReturn
   */
  export type menuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu update
   */
  export type menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to update a menu.
     */
    data: XOR<menuUpdateInput, menuUncheckedUpdateInput>
    /**
     * Choose, which menu to update.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu updateMany
   */
  export type menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to update.
     */
    limit?: number
  }

  /**
   * menu updateManyAndReturn
   */
  export type menuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu upsert
   */
  export type menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The filter to search for the menu to update in case it exists.
     */
    where: menuWhereUniqueInput
    /**
     * In case the menu found by the `where` argument doesn't exist, create a new menu with this data.
     */
    create: XOR<menuCreateInput, menuUncheckedCreateInput>
    /**
     * In case the menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuUpdateInput, menuUncheckedUpdateInput>
  }

  /**
   * menu delete
   */
  export type menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter which menu to delete.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu deleteMany
   */
  export type menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menus to delete
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to delete.
     */
    limit?: number
  }

  /**
   * menu.module
   */
  export type menu$moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    where?: moduleWhereInput
  }

  /**
   * menu.permission
   */
  export type menu$permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    where?: permissionWhereInput
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    cursor?: permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * menu without action
   */
  export type menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
  }


  /**
   * Model module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    id: number | null
  }

  export type ModuleSumAggregateOutputType = {
    id: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: number | null
    module_name: string | null
    url: string | null
    element: string | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: number | null
    module_name: string | null
    url: string | null
    element: string | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    module_name: number
    url: number
    element: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    id?: true
  }

  export type ModuleSumAggregateInputType = {
    id?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    module_name?: true
    url?: true
    element?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    module_name?: true
    url?: true
    element?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    module_name?: true
    url?: true
    element?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which module to aggregate.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type moduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput
    orderBy?: moduleOrderByWithAggregationInput | moduleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: moduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: number
    module_name: string | null
    url: string | null
    element: string | null
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends moduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type moduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_name?: boolean
    url?: boolean
    element?: boolean
    menu?: boolean | module$menuArgs<ExtArgs>
    permission?: boolean | module$permissionArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type moduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_name?: boolean
    url?: boolean
    element?: boolean
  }, ExtArgs["result"]["module"]>

  export type moduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_name?: boolean
    url?: boolean
    element?: boolean
  }, ExtArgs["result"]["module"]>

  export type moduleSelectScalar = {
    id?: boolean
    module_name?: boolean
    url?: boolean
    element?: boolean
  }

  export type moduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "module_name" | "url" | "element", ExtArgs["result"]["module"]>
  export type moduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | module$menuArgs<ExtArgs>
    permission?: boolean | module$permissionArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type moduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type moduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $modulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "module"
    objects: {
      menu: Prisma.$menuPayload<ExtArgs>[]
      permission: Prisma.$permissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      module_name: string | null
      url: string | null
      element: string | null
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type moduleGetPayload<S extends boolean | null | undefined | moduleDefaultArgs> = $Result.GetResult<Prisma.$modulePayload, S>

  type moduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<moduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface moduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['module'], meta: { name: 'module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {moduleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends moduleFindUniqueArgs>(args: SelectSubset<T, moduleFindUniqueArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {moduleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends moduleFindUniqueOrThrowArgs>(args: SelectSubset<T, moduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends moduleFindFirstArgs>(args?: SelectSubset<T, moduleFindFirstArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends moduleFindFirstOrThrowArgs>(args?: SelectSubset<T, moduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends moduleFindManyArgs>(args?: SelectSubset<T, moduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {moduleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends moduleCreateArgs>(args: SelectSubset<T, moduleCreateArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {moduleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends moduleCreateManyArgs>(args?: SelectSubset<T, moduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {moduleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends moduleCreateManyAndReturnArgs>(args?: SelectSubset<T, moduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {moduleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends moduleDeleteArgs>(args: SelectSubset<T, moduleDeleteArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {moduleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends moduleUpdateArgs>(args: SelectSubset<T, moduleUpdateArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {moduleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends moduleDeleteManyArgs>(args?: SelectSubset<T, moduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends moduleUpdateManyArgs>(args: SelectSubset<T, moduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {moduleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends moduleUpdateManyAndReturnArgs>(args: SelectSubset<T, moduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {moduleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends moduleUpsertArgs>(args: SelectSubset<T, moduleUpsertArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends moduleCountArgs>(
      args?: Subset<T, moduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends moduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moduleGroupByArgs['orderBy'] }
        : { orderBy?: moduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, moduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the module model
   */
  readonly fields: moduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends module$menuArgs<ExtArgs> = {}>(args?: Subset<T, module$menuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permission<T extends module$permissionArgs<ExtArgs> = {}>(args?: Subset<T, module$permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the module model
   */ 
  interface moduleFieldRefs {
    readonly id: FieldRef<"module", 'Int'>
    readonly module_name: FieldRef<"module", 'String'>
    readonly url: FieldRef<"module", 'String'>
    readonly element: FieldRef<"module", 'String'>
  }
    

  // Custom InputTypes
  /**
   * module findUnique
   */
  export type moduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module findUniqueOrThrow
   */
  export type moduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module findFirst
   */
  export type moduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module findFirstOrThrow
   */
  export type moduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module findMany
   */
  export type moduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module create
   */
  export type moduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The data needed to create a module.
     */
    data?: XOR<moduleCreateInput, moduleUncheckedCreateInput>
  }

  /**
   * module createMany
   */
  export type moduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modules.
     */
    data: moduleCreateManyInput | moduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * module createManyAndReturn
   */
  export type moduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * The data used to create many modules.
     */
    data: moduleCreateManyInput | moduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * module update
   */
  export type moduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The data needed to update a module.
     */
    data: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>
    /**
     * Choose, which module to update.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module updateMany
   */
  export type moduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modules.
     */
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to update.
     */
    limit?: number
  }

  /**
   * module updateManyAndReturn
   */
  export type moduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * The data used to update modules.
     */
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to update.
     */
    limit?: number
  }

  /**
   * module upsert
   */
  export type moduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The filter to search for the module to update in case it exists.
     */
    where: moduleWhereUniqueInput
    /**
     * In case the module found by the `where` argument doesn't exist, create a new module with this data.
     */
    create: XOR<moduleCreateInput, moduleUncheckedCreateInput>
    /**
     * In case the module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>
  }

  /**
   * module delete
   */
  export type moduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter which module to delete.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module deleteMany
   */
  export type moduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modules to delete
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to delete.
     */
    limit?: number
  }

  /**
   * module.menu
   */
  export type module$menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    where?: menuWhereInput
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    cursor?: menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * module.permission
   */
  export type module$permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    where?: permissionWhereInput
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    cursor?: permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * module without action
   */
  export type moduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
  }


  /**
   * Model permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
    module_id: number | null
    menu_id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
    role_id: number | null
    module_id: number | null
    menu_id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    role_id: number | null
    module_id: number | null
    menu_id: number | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    role_id: number | null
    module_id: number | null
    menu_id: number | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    role_id: number
    module_id: number
    menu_id: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
    role_id?: true
    module_id?: true
    menu_id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
    role_id?: true
    module_id?: true
    menu_id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    role_id?: true
    module_id?: true
    menu_id?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    role_id?: true
    module_id?: true
    menu_id?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    role_id?: true
    module_id?: true
    menu_id?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permission to aggregate.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permissionWhereInput
    orderBy?: permissionOrderByWithAggregationInput | permissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    role_id: number
    module_id: number | null
    menu_id: number | null
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    module_id?: boolean
    menu_id?: boolean
    menu?: boolean | permission$menuArgs<ExtArgs>
    module?: boolean | permission$moduleArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type permissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    module_id?: boolean
    menu_id?: boolean
    menu?: boolean | permission$menuArgs<ExtArgs>
    module?: boolean | permission$moduleArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type permissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    module_id?: boolean
    menu_id?: boolean
    menu?: boolean | permission$menuArgs<ExtArgs>
    module?: boolean | permission$moduleArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type permissionSelectScalar = {
    id?: boolean
    role_id?: boolean
    module_id?: boolean
    menu_id?: boolean
  }

  export type permissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_id" | "module_id" | "menu_id", ExtArgs["result"]["permission"]>
  export type permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | permission$menuArgs<ExtArgs>
    module?: boolean | permission$moduleArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type permissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | permission$menuArgs<ExtArgs>
    module?: boolean | permission$moduleArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type permissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | permission$menuArgs<ExtArgs>
    module?: boolean | permission$moduleArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }

  export type $permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "permission"
    objects: {
      menu: Prisma.$menuPayload<ExtArgs> | null
      module: Prisma.$modulePayload<ExtArgs> | null
      role: Prisma.$rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role_id: number
      module_id: number | null
      menu_id: number | null
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type permissionGetPayload<S extends boolean | null | undefined | permissionDefaultArgs> = $Result.GetResult<Prisma.$permissionPayload, S>

  type permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['permission'], meta: { name: 'permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {permissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends permissionFindUniqueArgs>(args: SelectSubset<T, permissionFindUniqueArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {permissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends permissionFindFirstArgs>(args?: SelectSubset<T, permissionFindFirstArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends permissionFindManyArgs>(args?: SelectSubset<T, permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {permissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends permissionCreateArgs>(args: SelectSubset<T, permissionCreateArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {permissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends permissionCreateManyArgs>(args?: SelectSubset<T, permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {permissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends permissionCreateManyAndReturnArgs>(args?: SelectSubset<T, permissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {permissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends permissionDeleteArgs>(args: SelectSubset<T, permissionDeleteArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {permissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends permissionUpdateArgs>(args: SelectSubset<T, permissionUpdateArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {permissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends permissionDeleteManyArgs>(args?: SelectSubset<T, permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends permissionUpdateManyArgs>(args: SelectSubset<T, permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {permissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends permissionUpdateManyAndReturnArgs>(args: SelectSubset<T, permissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {permissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends permissionUpsertArgs>(args: SelectSubset<T, permissionUpsertArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends permissionCountArgs>(
      args?: Subset<T, permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: permissionGroupByArgs['orderBy'] }
        : { orderBy?: permissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the permission model
   */
  readonly fields: permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends permission$menuArgs<ExtArgs> = {}>(args?: Subset<T, permission$menuArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    module<T extends permission$moduleArgs<ExtArgs> = {}>(args?: Subset<T, permission$moduleArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the permission model
   */ 
  interface permissionFieldRefs {
    readonly id: FieldRef<"permission", 'Int'>
    readonly role_id: FieldRef<"permission", 'Int'>
    readonly module_id: FieldRef<"permission", 'Int'>
    readonly menu_id: FieldRef<"permission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * permission findUnique
   */
  export type permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission findUniqueOrThrow
   */
  export type permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission findFirst
   */
  export type permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission findFirstOrThrow
   */
  export type permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission findMany
   */
  export type permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission create
   */
  export type permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a permission.
     */
    data: XOR<permissionCreateInput, permissionUncheckedCreateInput>
  }

  /**
   * permission createMany
   */
  export type permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many permissions.
     */
    data: permissionCreateManyInput | permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permission createManyAndReturn
   */
  export type permissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * The data used to create many permissions.
     */
    data: permissionCreateManyInput | permissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * permission update
   */
  export type permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a permission.
     */
    data: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
    /**
     * Choose, which permission to update.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission updateMany
   */
  export type permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionWhereInput
    /**
     * Limit how many permissions to update.
     */
    limit?: number
  }

  /**
   * permission updateManyAndReturn
   */
  export type permissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionWhereInput
    /**
     * Limit how many permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * permission upsert
   */
  export type permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the permission to update in case it exists.
     */
    where: permissionWhereUniqueInput
    /**
     * In case the permission found by the `where` argument doesn't exist, create a new permission with this data.
     */
    create: XOR<permissionCreateInput, permissionUncheckedCreateInput>
    /**
     * In case the permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
  }

  /**
   * permission delete
   */
  export type permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter which permission to delete.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission deleteMany
   */
  export type permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to delete
     */
    where?: permissionWhereInput
    /**
     * Limit how many permissions to delete.
     */
    limit?: number
  }

  /**
   * permission.menu
   */
  export type permission$menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    where?: menuWhereInput
  }

  /**
   * permission.module
   */
  export type permission$moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    where?: moduleWhereInput
  }

  /**
   * permission without action
   */
  export type permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    role_name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    role_name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    role_name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    role_name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    role_name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    role_name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    role_name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    permission?: boolean | role$permissionArgs<ExtArgs>
    user?: boolean | role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectScalar = {
    id?: boolean
    role_name?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_name", ExtArgs["result"]["role"]>
  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | role$permissionArgs<ExtArgs>
    user?: boolean | role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      permission: Prisma.$permissionPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role_name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {roleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roleCreateManyAndReturnArgs>(args?: SelectSubset<T, roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {roleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roleUpdateManyAndReturnArgs>(args: SelectSubset<T, roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends role$permissionArgs<ExtArgs> = {}>(args?: Subset<T, role$permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends role$userArgs<ExtArgs> = {}>(args?: Subset<T, role$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role model
   */ 
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'Int'>
    readonly role_name: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role createManyAndReturn
   */
  export type roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role updateManyAndReturn
   */
  export type roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role.permission
   */
  export type role$permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    where?: permissionWhereInput
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    cursor?: permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * role.user
   */
  export type role$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    is_loggedIn: boolean | null
    role_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    is_loggedIn: boolean | null
    role_id: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    is_loggedIn: number
    role_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    is_loggedIn?: true
    role_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    is_loggedIn?: true
    role_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    is_loggedIn?: true
    role_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    password: string
    is_loggedIn: boolean
    role_id: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    is_loggedIn?: boolean
    role_id?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    is_loggedIn?: boolean
    role_id?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    is_loggedIn?: boolean
    role_id?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    is_loggedIn?: boolean
    role_id?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "is_loggedIn" | "role_id", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      role: Prisma.$rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      password: string
      is_loggedIn: boolean
      role_id: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly is_loggedIn: FieldRef<"user", 'Boolean'>
    readonly role_id: FieldRef<"user", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MemberScalarFieldEnum: {
    id: 'id',
    nomor_polisi: 'nomor_polisi',
    nomor_pengganti: 'nomor_pengganti',
    nama_pemilik: 'nama_pemilik',
    nomor_hp: 'nomor_hp',
    tanggal_masuk: 'tanggal_masuk',
    bulanan: 'bulanan',
    keterangan: 'keterangan',
    is_black_list: 'is_black_list',
    tanggal_kadaluarsa: 'tanggal_kadaluarsa'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    module_id: 'module_id',
    menu_name: 'menu_name',
    url: 'url',
    element: 'element'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    module_name: 'module_name',
    url: 'url',
    element: 'element'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    role_id: 'role_id',
    module_id: 'module_id',
    menu_id: 'menu_id'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    role_name: 'role_name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    is_loggedIn: 'is_loggedIn',
    role_id: 'role_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type memberWhereInput = {
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    id?: IntFilter<"member"> | number
    nomor_polisi?: StringFilter<"member"> | string
    nomor_pengganti?: StringFilter<"member"> | string
    nama_pemilik?: StringFilter<"member"> | string
    nomor_hp?: StringFilter<"member"> | string
    tanggal_masuk?: DateTimeFilter<"member"> | Date | string
    bulanan?: IntFilter<"member"> | number
    keterangan?: StringFilter<"member"> | string
    is_black_list?: BoolFilter<"member"> | boolean
    tanggal_kadaluarsa?: DateTimeFilter<"member"> | Date | string
  }

  export type memberOrderByWithRelationInput = {
    id?: SortOrder
    nomor_polisi?: SortOrder
    nomor_pengganti?: SortOrder
    nama_pemilik?: SortOrder
    nomor_hp?: SortOrder
    tanggal_masuk?: SortOrder
    bulanan?: SortOrder
    keterangan?: SortOrder
    is_black_list?: SortOrder
    tanggal_kadaluarsa?: SortOrder
  }

  export type memberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    nomor_polisi?: StringFilter<"member"> | string
    nomor_pengganti?: StringFilter<"member"> | string
    nama_pemilik?: StringFilter<"member"> | string
    nomor_hp?: StringFilter<"member"> | string
    tanggal_masuk?: DateTimeFilter<"member"> | Date | string
    bulanan?: IntFilter<"member"> | number
    keterangan?: StringFilter<"member"> | string
    is_black_list?: BoolFilter<"member"> | boolean
    tanggal_kadaluarsa?: DateTimeFilter<"member"> | Date | string
  }, "id">

  export type memberOrderByWithAggregationInput = {
    id?: SortOrder
    nomor_polisi?: SortOrder
    nomor_pengganti?: SortOrder
    nama_pemilik?: SortOrder
    nomor_hp?: SortOrder
    tanggal_masuk?: SortOrder
    bulanan?: SortOrder
    keterangan?: SortOrder
    is_black_list?: SortOrder
    tanggal_kadaluarsa?: SortOrder
    _count?: memberCountOrderByAggregateInput
    _avg?: memberAvgOrderByAggregateInput
    _max?: memberMaxOrderByAggregateInput
    _min?: memberMinOrderByAggregateInput
    _sum?: memberSumOrderByAggregateInput
  }

  export type memberScalarWhereWithAggregatesInput = {
    AND?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    OR?: memberScalarWhereWithAggregatesInput[]
    NOT?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"member"> | number
    nomor_polisi?: StringWithAggregatesFilter<"member"> | string
    nomor_pengganti?: StringWithAggregatesFilter<"member"> | string
    nama_pemilik?: StringWithAggregatesFilter<"member"> | string
    nomor_hp?: StringWithAggregatesFilter<"member"> | string
    tanggal_masuk?: DateTimeWithAggregatesFilter<"member"> | Date | string
    bulanan?: IntWithAggregatesFilter<"member"> | number
    keterangan?: StringWithAggregatesFilter<"member"> | string
    is_black_list?: BoolWithAggregatesFilter<"member"> | boolean
    tanggal_kadaluarsa?: DateTimeWithAggregatesFilter<"member"> | Date | string
  }

  export type menuWhereInput = {
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    id?: IntFilter<"menu"> | number
    module_id?: IntNullableFilter<"menu"> | number | null
    menu_name?: StringNullableFilter<"menu"> | string | null
    url?: StringNullableFilter<"menu"> | string | null
    element?: StringNullableFilter<"menu"> | string | null
    module?: XOR<ModuleNullableScalarRelationFilter, moduleWhereInput> | null
    permission?: PermissionListRelationFilter
  }

  export type menuOrderByWithRelationInput = {
    id?: SortOrder
    module_id?: SortOrderInput | SortOrder
    menu_name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    element?: SortOrderInput | SortOrder
    module?: moduleOrderByWithRelationInput
    permission?: permissionOrderByRelationAggregateInput
  }

  export type menuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    module_id?: IntNullableFilter<"menu"> | number | null
    menu_name?: StringNullableFilter<"menu"> | string | null
    url?: StringNullableFilter<"menu"> | string | null
    element?: StringNullableFilter<"menu"> | string | null
    module?: XOR<ModuleNullableScalarRelationFilter, moduleWhereInput> | null
    permission?: PermissionListRelationFilter
  }, "id">

  export type menuOrderByWithAggregationInput = {
    id?: SortOrder
    module_id?: SortOrderInput | SortOrder
    menu_name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    element?: SortOrderInput | SortOrder
    _count?: menuCountOrderByAggregateInput
    _avg?: menuAvgOrderByAggregateInput
    _max?: menuMaxOrderByAggregateInput
    _min?: menuMinOrderByAggregateInput
    _sum?: menuSumOrderByAggregateInput
  }

  export type menuScalarWhereWithAggregatesInput = {
    AND?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    OR?: menuScalarWhereWithAggregatesInput[]
    NOT?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"menu"> | number
    module_id?: IntNullableWithAggregatesFilter<"menu"> | number | null
    menu_name?: StringNullableWithAggregatesFilter<"menu"> | string | null
    url?: StringNullableWithAggregatesFilter<"menu"> | string | null
    element?: StringNullableWithAggregatesFilter<"menu"> | string | null
  }

  export type moduleWhereInput = {
    AND?: moduleWhereInput | moduleWhereInput[]
    OR?: moduleWhereInput[]
    NOT?: moduleWhereInput | moduleWhereInput[]
    id?: IntFilter<"module"> | number
    module_name?: StringNullableFilter<"module"> | string | null
    url?: StringNullableFilter<"module"> | string | null
    element?: StringNullableFilter<"module"> | string | null
    menu?: MenuListRelationFilter
    permission?: PermissionListRelationFilter
  }

  export type moduleOrderByWithRelationInput = {
    id?: SortOrder
    module_name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    element?: SortOrderInput | SortOrder
    menu?: menuOrderByRelationAggregateInput
    permission?: permissionOrderByRelationAggregateInput
  }

  export type moduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: moduleWhereInput | moduleWhereInput[]
    OR?: moduleWhereInput[]
    NOT?: moduleWhereInput | moduleWhereInput[]
    module_name?: StringNullableFilter<"module"> | string | null
    url?: StringNullableFilter<"module"> | string | null
    element?: StringNullableFilter<"module"> | string | null
    menu?: MenuListRelationFilter
    permission?: PermissionListRelationFilter
  }, "id">

  export type moduleOrderByWithAggregationInput = {
    id?: SortOrder
    module_name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    element?: SortOrderInput | SortOrder
    _count?: moduleCountOrderByAggregateInput
    _avg?: moduleAvgOrderByAggregateInput
    _max?: moduleMaxOrderByAggregateInput
    _min?: moduleMinOrderByAggregateInput
    _sum?: moduleSumOrderByAggregateInput
  }

  export type moduleScalarWhereWithAggregatesInput = {
    AND?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[]
    OR?: moduleScalarWhereWithAggregatesInput[]
    NOT?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"module"> | number
    module_name?: StringNullableWithAggregatesFilter<"module"> | string | null
    url?: StringNullableWithAggregatesFilter<"module"> | string | null
    element?: StringNullableWithAggregatesFilter<"module"> | string | null
  }

  export type permissionWhereInput = {
    AND?: permissionWhereInput | permissionWhereInput[]
    OR?: permissionWhereInput[]
    NOT?: permissionWhereInput | permissionWhereInput[]
    id?: IntFilter<"permission"> | number
    role_id?: IntFilter<"permission"> | number
    module_id?: IntNullableFilter<"permission"> | number | null
    menu_id?: IntNullableFilter<"permission"> | number | null
    menu?: XOR<MenuNullableScalarRelationFilter, menuWhereInput> | null
    module?: XOR<ModuleNullableScalarRelationFilter, moduleWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }

  export type permissionOrderByWithRelationInput = {
    id?: SortOrder
    role_id?: SortOrder
    module_id?: SortOrderInput | SortOrder
    menu_id?: SortOrderInput | SortOrder
    menu?: menuOrderByWithRelationInput
    module?: moduleOrderByWithRelationInput
    role?: roleOrderByWithRelationInput
  }

  export type permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: permissionWhereInput | permissionWhereInput[]
    OR?: permissionWhereInput[]
    NOT?: permissionWhereInput | permissionWhereInput[]
    role_id?: IntFilter<"permission"> | number
    module_id?: IntNullableFilter<"permission"> | number | null
    menu_id?: IntNullableFilter<"permission"> | number | null
    menu?: XOR<MenuNullableScalarRelationFilter, menuWhereInput> | null
    module?: XOR<ModuleNullableScalarRelationFilter, moduleWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }, "id">

  export type permissionOrderByWithAggregationInput = {
    id?: SortOrder
    role_id?: SortOrder
    module_id?: SortOrderInput | SortOrder
    menu_id?: SortOrderInput | SortOrder
    _count?: permissionCountOrderByAggregateInput
    _avg?: permissionAvgOrderByAggregateInput
    _max?: permissionMaxOrderByAggregateInput
    _min?: permissionMinOrderByAggregateInput
    _sum?: permissionSumOrderByAggregateInput
  }

  export type permissionScalarWhereWithAggregatesInput = {
    AND?: permissionScalarWhereWithAggregatesInput | permissionScalarWhereWithAggregatesInput[]
    OR?: permissionScalarWhereWithAggregatesInput[]
    NOT?: permissionScalarWhereWithAggregatesInput | permissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"permission"> | number
    role_id?: IntWithAggregatesFilter<"permission"> | number
    module_id?: IntNullableWithAggregatesFilter<"permission"> | number | null
    menu_id?: IntNullableWithAggregatesFilter<"permission"> | number | null
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: IntFilter<"role"> | number
    role_name?: StringFilter<"role"> | string
    permission?: PermissionListRelationFilter
    user?: UserListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    role_name?: SortOrder
    permission?: permissionOrderByRelationAggregateInput
    user?: userOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    role_name?: StringFilter<"role"> | string
    permission?: PermissionListRelationFilter
    user?: UserListRelationFilter
  }, "id">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    role_name?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"role"> | number
    role_name?: StringWithAggregatesFilter<"role"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    is_loggedIn?: BoolFilter<"user"> | boolean
    role_id?: IntFilter<"user"> | number
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    is_loggedIn?: SortOrder
    role_id?: SortOrder
    role?: roleOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    is_loggedIn?: BoolFilter<"user"> | boolean
    role_id?: IntFilter<"user"> | number
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }, "id" | "name">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    is_loggedIn?: SortOrder
    role_id?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    password?: StringWithAggregatesFilter<"user"> | string
    is_loggedIn?: BoolWithAggregatesFilter<"user"> | boolean
    role_id?: IntWithAggregatesFilter<"user"> | number
  }

  export type memberCreateInput = {
    nomor_polisi: string
    nomor_pengganti: string
    nama_pemilik: string
    nomor_hp: string
    tanggal_masuk: Date | string
    bulanan: number
    keterangan: string
    is_black_list?: boolean
    tanggal_kadaluarsa: Date | string
  }

  export type memberUncheckedCreateInput = {
    id?: number
    nomor_polisi: string
    nomor_pengganti: string
    nama_pemilik: string
    nomor_hp: string
    tanggal_masuk: Date | string
    bulanan: number
    keterangan: string
    is_black_list?: boolean
    tanggal_kadaluarsa: Date | string
  }

  export type memberUpdateInput = {
    nomor_polisi?: StringFieldUpdateOperationsInput | string
    nomor_pengganti?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    bulanan?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    is_black_list?: BoolFieldUpdateOperationsInput | boolean
    tanggal_kadaluarsa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type memberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomor_polisi?: StringFieldUpdateOperationsInput | string
    nomor_pengganti?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    bulanan?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    is_black_list?: BoolFieldUpdateOperationsInput | boolean
    tanggal_kadaluarsa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type memberCreateManyInput = {
    id?: number
    nomor_polisi: string
    nomor_pengganti: string
    nama_pemilik: string
    nomor_hp: string
    tanggal_masuk: Date | string
    bulanan: number
    keterangan: string
    is_black_list?: boolean
    tanggal_kadaluarsa: Date | string
  }

  export type memberUpdateManyMutationInput = {
    nomor_polisi?: StringFieldUpdateOperationsInput | string
    nomor_pengganti?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    bulanan?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    is_black_list?: BoolFieldUpdateOperationsInput | boolean
    tanggal_kadaluarsa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type memberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomor_polisi?: StringFieldUpdateOperationsInput | string
    nomor_pengganti?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    bulanan?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    is_black_list?: BoolFieldUpdateOperationsInput | boolean
    tanggal_kadaluarsa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuCreateInput = {
    menu_name?: string | null
    url?: string | null
    element?: string | null
    module?: moduleCreateNestedOneWithoutMenuInput
    permission?: permissionCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateInput = {
    id?: number
    module_id?: number | null
    menu_name?: string | null
    url?: string | null
    element?: string | null
    permission?: permissionUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuUpdateInput = {
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    module?: moduleUpdateOneWithoutMenuNestedInput
    permission?: permissionUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: permissionUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menuCreateManyInput = {
    id?: number
    module_id?: number | null
    menu_name?: string | null
    url?: string | null
    element?: string | null
  }

  export type menuUpdateManyMutationInput = {
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type moduleCreateInput = {
    module_name?: string | null
    url?: string | null
    element?: string | null
    menu?: menuCreateNestedManyWithoutModuleInput
    permission?: permissionCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateInput = {
    id?: number
    module_name?: string | null
    url?: string | null
    element?: string | null
    menu?: menuUncheckedCreateNestedManyWithoutModuleInput
    permission?: permissionUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleUpdateInput = {
    module_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: menuUpdateManyWithoutModuleNestedInput
    permission?: permissionUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: menuUncheckedUpdateManyWithoutModuleNestedInput
    permission?: permissionUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleCreateManyInput = {
    id?: number
    module_name?: string | null
    url?: string | null
    element?: string | null
  }

  export type moduleUpdateManyMutationInput = {
    module_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type moduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type permissionCreateInput = {
    menu?: menuCreateNestedOneWithoutPermissionInput
    module?: moduleCreateNestedOneWithoutPermissionInput
    role: roleCreateNestedOneWithoutPermissionInput
  }

  export type permissionUncheckedCreateInput = {
    id?: number
    role_id: number
    module_id?: number | null
    menu_id?: number | null
  }

  export type permissionUpdateInput = {
    menu?: menuUpdateOneWithoutPermissionNestedInput
    module?: moduleUpdateOneWithoutPermissionNestedInput
    role?: roleUpdateOneRequiredWithoutPermissionNestedInput
  }

  export type permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type permissionCreateManyInput = {
    id?: number
    role_id: number
    module_id?: number | null
    menu_id?: number | null
  }

  export type permissionUpdateManyMutationInput = {

  }

  export type permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roleCreateInput = {
    role_name: string
    permission?: permissionCreateNestedManyWithoutRoleInput
    user?: userCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    id?: number
    role_name: string
    permission?: permissionUncheckedCreateNestedManyWithoutRoleInput
    user?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    permission?: permissionUpdateManyWithoutRoleNestedInput
    user?: userUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    permission?: permissionUncheckedUpdateManyWithoutRoleNestedInput
    user?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    id?: number
    role_name: string
  }

  export type roleUpdateManyMutationInput = {
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    name?: string | null
    password: string
    is_loggedIn?: boolean
    role: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name?: string | null
    password: string
    is_loggedIn?: boolean
    role_id: number
  }

  export type userUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    is_loggedIn?: BoolFieldUpdateOperationsInput | boolean
    role?: roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    is_loggedIn?: BoolFieldUpdateOperationsInput | boolean
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateManyInput = {
    id?: number
    name?: string | null
    password: string
    is_loggedIn?: boolean
    role_id: number
  }

  export type userUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    is_loggedIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    is_loggedIn?: BoolFieldUpdateOperationsInput | boolean
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type memberCountOrderByAggregateInput = {
    id?: SortOrder
    nomor_polisi?: SortOrder
    nomor_pengganti?: SortOrder
    nama_pemilik?: SortOrder
    nomor_hp?: SortOrder
    tanggal_masuk?: SortOrder
    bulanan?: SortOrder
    keterangan?: SortOrder
    is_black_list?: SortOrder
    tanggal_kadaluarsa?: SortOrder
  }

  export type memberAvgOrderByAggregateInput = {
    id?: SortOrder
    bulanan?: SortOrder
  }

  export type memberMaxOrderByAggregateInput = {
    id?: SortOrder
    nomor_polisi?: SortOrder
    nomor_pengganti?: SortOrder
    nama_pemilik?: SortOrder
    nomor_hp?: SortOrder
    tanggal_masuk?: SortOrder
    bulanan?: SortOrder
    keterangan?: SortOrder
    is_black_list?: SortOrder
    tanggal_kadaluarsa?: SortOrder
  }

  export type memberMinOrderByAggregateInput = {
    id?: SortOrder
    nomor_polisi?: SortOrder
    nomor_pengganti?: SortOrder
    nama_pemilik?: SortOrder
    nomor_hp?: SortOrder
    tanggal_masuk?: SortOrder
    bulanan?: SortOrder
    keterangan?: SortOrder
    is_black_list?: SortOrder
    tanggal_kadaluarsa?: SortOrder
  }

  export type memberSumOrderByAggregateInput = {
    id?: SortOrder
    bulanan?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ModuleNullableScalarRelationFilter = {
    is?: moduleWhereInput | null
    isNot?: moduleWhereInput | null
  }

  export type PermissionListRelationFilter = {
    every?: permissionWhereInput
    some?: permissionWhereInput
    none?: permissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type permissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menuCountOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    menu_name?: SortOrder
    url?: SortOrder
    element?: SortOrder
  }

  export type menuAvgOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
  }

  export type menuMaxOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    menu_name?: SortOrder
    url?: SortOrder
    element?: SortOrder
  }

  export type menuMinOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    menu_name?: SortOrder
    url?: SortOrder
    element?: SortOrder
  }

  export type menuSumOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MenuListRelationFilter = {
    every?: menuWhereInput
    some?: menuWhereInput
    none?: menuWhereInput
  }

  export type menuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type moduleCountOrderByAggregateInput = {
    id?: SortOrder
    module_name?: SortOrder
    url?: SortOrder
    element?: SortOrder
  }

  export type moduleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type moduleMaxOrderByAggregateInput = {
    id?: SortOrder
    module_name?: SortOrder
    url?: SortOrder
    element?: SortOrder
  }

  export type moduleMinOrderByAggregateInput = {
    id?: SortOrder
    module_name?: SortOrder
    url?: SortOrder
    element?: SortOrder
  }

  export type moduleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MenuNullableScalarRelationFilter = {
    is?: menuWhereInput | null
    isNot?: menuWhereInput | null
  }

  export type RoleScalarRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type permissionCountOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    module_id?: SortOrder
    menu_id?: SortOrder
  }

  export type permissionAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    module_id?: SortOrder
    menu_id?: SortOrder
  }

  export type permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    module_id?: SortOrder
    menu_id?: SortOrder
  }

  export type permissionMinOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    module_id?: SortOrder
    menu_id?: SortOrder
  }

  export type permissionSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    module_id?: SortOrder
    menu_id?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    is_loggedIn?: SortOrder
    role_id?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    is_loggedIn?: SortOrder
    role_id?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    is_loggedIn?: SortOrder
    role_id?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type moduleCreateNestedOneWithoutMenuInput = {
    create?: XOR<moduleCreateWithoutMenuInput, moduleUncheckedCreateWithoutMenuInput>
    connectOrCreate?: moduleCreateOrConnectWithoutMenuInput
    connect?: moduleWhereUniqueInput
  }

  export type permissionCreateNestedManyWithoutMenuInput = {
    create?: XOR<permissionCreateWithoutMenuInput, permissionUncheckedCreateWithoutMenuInput> | permissionCreateWithoutMenuInput[] | permissionUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutMenuInput | permissionCreateOrConnectWithoutMenuInput[]
    createMany?: permissionCreateManyMenuInputEnvelope
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
  }

  export type permissionUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<permissionCreateWithoutMenuInput, permissionUncheckedCreateWithoutMenuInput> | permissionCreateWithoutMenuInput[] | permissionUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutMenuInput | permissionCreateOrConnectWithoutMenuInput[]
    createMany?: permissionCreateManyMenuInputEnvelope
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type moduleUpdateOneWithoutMenuNestedInput = {
    create?: XOR<moduleCreateWithoutMenuInput, moduleUncheckedCreateWithoutMenuInput>
    connectOrCreate?: moduleCreateOrConnectWithoutMenuInput
    upsert?: moduleUpsertWithoutMenuInput
    disconnect?: moduleWhereInput | boolean
    delete?: moduleWhereInput | boolean
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutMenuInput, moduleUpdateWithoutMenuInput>, moduleUncheckedUpdateWithoutMenuInput>
  }

  export type permissionUpdateManyWithoutMenuNestedInput = {
    create?: XOR<permissionCreateWithoutMenuInput, permissionUncheckedCreateWithoutMenuInput> | permissionCreateWithoutMenuInput[] | permissionUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutMenuInput | permissionCreateOrConnectWithoutMenuInput[]
    upsert?: permissionUpsertWithWhereUniqueWithoutMenuInput | permissionUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: permissionCreateManyMenuInputEnvelope
    set?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    disconnect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    delete?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    update?: permissionUpdateWithWhereUniqueWithoutMenuInput | permissionUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: permissionUpdateManyWithWhereWithoutMenuInput | permissionUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: permissionScalarWhereInput | permissionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type permissionUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<permissionCreateWithoutMenuInput, permissionUncheckedCreateWithoutMenuInput> | permissionCreateWithoutMenuInput[] | permissionUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutMenuInput | permissionCreateOrConnectWithoutMenuInput[]
    upsert?: permissionUpsertWithWhereUniqueWithoutMenuInput | permissionUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: permissionCreateManyMenuInputEnvelope
    set?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    disconnect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    delete?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    update?: permissionUpdateWithWhereUniqueWithoutMenuInput | permissionUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: permissionUpdateManyWithWhereWithoutMenuInput | permissionUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: permissionScalarWhereInput | permissionScalarWhereInput[]
  }

  export type menuCreateNestedManyWithoutModuleInput = {
    create?: XOR<menuCreateWithoutModuleInput, menuUncheckedCreateWithoutModuleInput> | menuCreateWithoutModuleInput[] | menuUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: menuCreateOrConnectWithoutModuleInput | menuCreateOrConnectWithoutModuleInput[]
    createMany?: menuCreateManyModuleInputEnvelope
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
  }

  export type permissionCreateNestedManyWithoutModuleInput = {
    create?: XOR<permissionCreateWithoutModuleInput, permissionUncheckedCreateWithoutModuleInput> | permissionCreateWithoutModuleInput[] | permissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutModuleInput | permissionCreateOrConnectWithoutModuleInput[]
    createMany?: permissionCreateManyModuleInputEnvelope
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
  }

  export type menuUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<menuCreateWithoutModuleInput, menuUncheckedCreateWithoutModuleInput> | menuCreateWithoutModuleInput[] | menuUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: menuCreateOrConnectWithoutModuleInput | menuCreateOrConnectWithoutModuleInput[]
    createMany?: menuCreateManyModuleInputEnvelope
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
  }

  export type permissionUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<permissionCreateWithoutModuleInput, permissionUncheckedCreateWithoutModuleInput> | permissionCreateWithoutModuleInput[] | permissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutModuleInput | permissionCreateOrConnectWithoutModuleInput[]
    createMany?: permissionCreateManyModuleInputEnvelope
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
  }

  export type menuUpdateManyWithoutModuleNestedInput = {
    create?: XOR<menuCreateWithoutModuleInput, menuUncheckedCreateWithoutModuleInput> | menuCreateWithoutModuleInput[] | menuUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: menuCreateOrConnectWithoutModuleInput | menuCreateOrConnectWithoutModuleInput[]
    upsert?: menuUpsertWithWhereUniqueWithoutModuleInput | menuUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: menuCreateManyModuleInputEnvelope
    set?: menuWhereUniqueInput | menuWhereUniqueInput[]
    disconnect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    delete?: menuWhereUniqueInput | menuWhereUniqueInput[]
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    update?: menuUpdateWithWhereUniqueWithoutModuleInput | menuUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: menuUpdateManyWithWhereWithoutModuleInput | menuUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: menuScalarWhereInput | menuScalarWhereInput[]
  }

  export type permissionUpdateManyWithoutModuleNestedInput = {
    create?: XOR<permissionCreateWithoutModuleInput, permissionUncheckedCreateWithoutModuleInput> | permissionCreateWithoutModuleInput[] | permissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutModuleInput | permissionCreateOrConnectWithoutModuleInput[]
    upsert?: permissionUpsertWithWhereUniqueWithoutModuleInput | permissionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: permissionCreateManyModuleInputEnvelope
    set?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    disconnect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    delete?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    update?: permissionUpdateWithWhereUniqueWithoutModuleInput | permissionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: permissionUpdateManyWithWhereWithoutModuleInput | permissionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: permissionScalarWhereInput | permissionScalarWhereInput[]
  }

  export type menuUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<menuCreateWithoutModuleInput, menuUncheckedCreateWithoutModuleInput> | menuCreateWithoutModuleInput[] | menuUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: menuCreateOrConnectWithoutModuleInput | menuCreateOrConnectWithoutModuleInput[]
    upsert?: menuUpsertWithWhereUniqueWithoutModuleInput | menuUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: menuCreateManyModuleInputEnvelope
    set?: menuWhereUniqueInput | menuWhereUniqueInput[]
    disconnect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    delete?: menuWhereUniqueInput | menuWhereUniqueInput[]
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    update?: menuUpdateWithWhereUniqueWithoutModuleInput | menuUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: menuUpdateManyWithWhereWithoutModuleInput | menuUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: menuScalarWhereInput | menuScalarWhereInput[]
  }

  export type permissionUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<permissionCreateWithoutModuleInput, permissionUncheckedCreateWithoutModuleInput> | permissionCreateWithoutModuleInput[] | permissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutModuleInput | permissionCreateOrConnectWithoutModuleInput[]
    upsert?: permissionUpsertWithWhereUniqueWithoutModuleInput | permissionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: permissionCreateManyModuleInputEnvelope
    set?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    disconnect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    delete?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    update?: permissionUpdateWithWhereUniqueWithoutModuleInput | permissionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: permissionUpdateManyWithWhereWithoutModuleInput | permissionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: permissionScalarWhereInput | permissionScalarWhereInput[]
  }

  export type menuCreateNestedOneWithoutPermissionInput = {
    create?: XOR<menuCreateWithoutPermissionInput, menuUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: menuCreateOrConnectWithoutPermissionInput
    connect?: menuWhereUniqueInput
  }

  export type moduleCreateNestedOneWithoutPermissionInput = {
    create?: XOR<moduleCreateWithoutPermissionInput, moduleUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: moduleCreateOrConnectWithoutPermissionInput
    connect?: moduleWhereUniqueInput
  }

  export type roleCreateNestedOneWithoutPermissionInput = {
    create?: XOR<roleCreateWithoutPermissionInput, roleUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: roleCreateOrConnectWithoutPermissionInput
    connect?: roleWhereUniqueInput
  }

  export type menuUpdateOneWithoutPermissionNestedInput = {
    create?: XOR<menuCreateWithoutPermissionInput, menuUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: menuCreateOrConnectWithoutPermissionInput
    upsert?: menuUpsertWithoutPermissionInput
    disconnect?: menuWhereInput | boolean
    delete?: menuWhereInput | boolean
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutPermissionInput, menuUpdateWithoutPermissionInput>, menuUncheckedUpdateWithoutPermissionInput>
  }

  export type moduleUpdateOneWithoutPermissionNestedInput = {
    create?: XOR<moduleCreateWithoutPermissionInput, moduleUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: moduleCreateOrConnectWithoutPermissionInput
    upsert?: moduleUpsertWithoutPermissionInput
    disconnect?: moduleWhereInput | boolean
    delete?: moduleWhereInput | boolean
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutPermissionInput, moduleUpdateWithoutPermissionInput>, moduleUncheckedUpdateWithoutPermissionInput>
  }

  export type roleUpdateOneRequiredWithoutPermissionNestedInput = {
    create?: XOR<roleCreateWithoutPermissionInput, roleUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: roleCreateOrConnectWithoutPermissionInput
    upsert?: roleUpsertWithoutPermissionInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutPermissionInput, roleUpdateWithoutPermissionInput>, roleUncheckedUpdateWithoutPermissionInput>
  }

  export type permissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<permissionCreateWithoutRoleInput, permissionUncheckedCreateWithoutRoleInput> | permissionCreateWithoutRoleInput[] | permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutRoleInput | permissionCreateOrConnectWithoutRoleInput[]
    createMany?: permissionCreateManyRoleInputEnvelope
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
  }

  export type userCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type permissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<permissionCreateWithoutRoleInput, permissionUncheckedCreateWithoutRoleInput> | permissionCreateWithoutRoleInput[] | permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutRoleInput | permissionCreateOrConnectWithoutRoleInput[]
    createMany?: permissionCreateManyRoleInputEnvelope
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type permissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<permissionCreateWithoutRoleInput, permissionUncheckedCreateWithoutRoleInput> | permissionCreateWithoutRoleInput[] | permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutRoleInput | permissionCreateOrConnectWithoutRoleInput[]
    upsert?: permissionUpsertWithWhereUniqueWithoutRoleInput | permissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: permissionCreateManyRoleInputEnvelope
    set?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    disconnect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    delete?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    update?: permissionUpdateWithWhereUniqueWithoutRoleInput | permissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: permissionUpdateManyWithWhereWithoutRoleInput | permissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: permissionScalarWhereInput | permissionScalarWhereInput[]
  }

  export type userUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type permissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<permissionCreateWithoutRoleInput, permissionUncheckedCreateWithoutRoleInput> | permissionCreateWithoutRoleInput[] | permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: permissionCreateOrConnectWithoutRoleInput | permissionCreateOrConnectWithoutRoleInput[]
    upsert?: permissionUpsertWithWhereUniqueWithoutRoleInput | permissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: permissionCreateManyRoleInputEnvelope
    set?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    disconnect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    delete?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    connect?: permissionWhereUniqueInput | permissionWhereUniqueInput[]
    update?: permissionUpdateWithWhereUniqueWithoutRoleInput | permissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: permissionUpdateManyWithWhereWithoutRoleInput | permissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: permissionScalarWhereInput | permissionScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type roleCreateNestedOneWithoutUserInput = {
    create?: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserInput
    connect?: roleWhereUniqueInput
  }

  export type roleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserInput
    upsert?: roleUpsertWithoutUserInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUserInput, roleUpdateWithoutUserInput>, roleUncheckedUpdateWithoutUserInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type moduleCreateWithoutMenuInput = {
    module_name?: string | null
    url?: string | null
    element?: string | null
    permission?: permissionCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateWithoutMenuInput = {
    id?: number
    module_name?: string | null
    url?: string | null
    element?: string | null
    permission?: permissionUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutMenuInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutMenuInput, moduleUncheckedCreateWithoutMenuInput>
  }

  export type permissionCreateWithoutMenuInput = {
    module?: moduleCreateNestedOneWithoutPermissionInput
    role: roleCreateNestedOneWithoutPermissionInput
  }

  export type permissionUncheckedCreateWithoutMenuInput = {
    id?: number
    role_id: number
    module_id?: number | null
  }

  export type permissionCreateOrConnectWithoutMenuInput = {
    where: permissionWhereUniqueInput
    create: XOR<permissionCreateWithoutMenuInput, permissionUncheckedCreateWithoutMenuInput>
  }

  export type permissionCreateManyMenuInputEnvelope = {
    data: permissionCreateManyMenuInput | permissionCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type moduleUpsertWithoutMenuInput = {
    update: XOR<moduleUpdateWithoutMenuInput, moduleUncheckedUpdateWithoutMenuInput>
    create: XOR<moduleCreateWithoutMenuInput, moduleUncheckedCreateWithoutMenuInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutMenuInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutMenuInput, moduleUncheckedUpdateWithoutMenuInput>
  }

  export type moduleUpdateWithoutMenuInput = {
    module_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: permissionUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: permissionUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type permissionUpsertWithWhereUniqueWithoutMenuInput = {
    where: permissionWhereUniqueInput
    update: XOR<permissionUpdateWithoutMenuInput, permissionUncheckedUpdateWithoutMenuInput>
    create: XOR<permissionCreateWithoutMenuInput, permissionUncheckedCreateWithoutMenuInput>
  }

  export type permissionUpdateWithWhereUniqueWithoutMenuInput = {
    where: permissionWhereUniqueInput
    data: XOR<permissionUpdateWithoutMenuInput, permissionUncheckedUpdateWithoutMenuInput>
  }

  export type permissionUpdateManyWithWhereWithoutMenuInput = {
    where: permissionScalarWhereInput
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyWithoutMenuInput>
  }

  export type permissionScalarWhereInput = {
    AND?: permissionScalarWhereInput | permissionScalarWhereInput[]
    OR?: permissionScalarWhereInput[]
    NOT?: permissionScalarWhereInput | permissionScalarWhereInput[]
    id?: IntFilter<"permission"> | number
    role_id?: IntFilter<"permission"> | number
    module_id?: IntNullableFilter<"permission"> | number | null
    menu_id?: IntNullableFilter<"permission"> | number | null
  }

  export type menuCreateWithoutModuleInput = {
    menu_name?: string | null
    url?: string | null
    element?: string | null
    permission?: permissionCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutModuleInput = {
    id?: number
    menu_name?: string | null
    url?: string | null
    element?: string | null
    permission?: permissionUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutModuleInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutModuleInput, menuUncheckedCreateWithoutModuleInput>
  }

  export type menuCreateManyModuleInputEnvelope = {
    data: menuCreateManyModuleInput | menuCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type permissionCreateWithoutModuleInput = {
    menu?: menuCreateNestedOneWithoutPermissionInput
    role: roleCreateNestedOneWithoutPermissionInput
  }

  export type permissionUncheckedCreateWithoutModuleInput = {
    id?: number
    role_id: number
    menu_id?: number | null
  }

  export type permissionCreateOrConnectWithoutModuleInput = {
    where: permissionWhereUniqueInput
    create: XOR<permissionCreateWithoutModuleInput, permissionUncheckedCreateWithoutModuleInput>
  }

  export type permissionCreateManyModuleInputEnvelope = {
    data: permissionCreateManyModuleInput | permissionCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type menuUpsertWithWhereUniqueWithoutModuleInput = {
    where: menuWhereUniqueInput
    update: XOR<menuUpdateWithoutModuleInput, menuUncheckedUpdateWithoutModuleInput>
    create: XOR<menuCreateWithoutModuleInput, menuUncheckedCreateWithoutModuleInput>
  }

  export type menuUpdateWithWhereUniqueWithoutModuleInput = {
    where: menuWhereUniqueInput
    data: XOR<menuUpdateWithoutModuleInput, menuUncheckedUpdateWithoutModuleInput>
  }

  export type menuUpdateManyWithWhereWithoutModuleInput = {
    where: menuScalarWhereInput
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyWithoutModuleInput>
  }

  export type menuScalarWhereInput = {
    AND?: menuScalarWhereInput | menuScalarWhereInput[]
    OR?: menuScalarWhereInput[]
    NOT?: menuScalarWhereInput | menuScalarWhereInput[]
    id?: IntFilter<"menu"> | number
    module_id?: IntNullableFilter<"menu"> | number | null
    menu_name?: StringNullableFilter<"menu"> | string | null
    url?: StringNullableFilter<"menu"> | string | null
    element?: StringNullableFilter<"menu"> | string | null
  }

  export type permissionUpsertWithWhereUniqueWithoutModuleInput = {
    where: permissionWhereUniqueInput
    update: XOR<permissionUpdateWithoutModuleInput, permissionUncheckedUpdateWithoutModuleInput>
    create: XOR<permissionCreateWithoutModuleInput, permissionUncheckedCreateWithoutModuleInput>
  }

  export type permissionUpdateWithWhereUniqueWithoutModuleInput = {
    where: permissionWhereUniqueInput
    data: XOR<permissionUpdateWithoutModuleInput, permissionUncheckedUpdateWithoutModuleInput>
  }

  export type permissionUpdateManyWithWhereWithoutModuleInput = {
    where: permissionScalarWhereInput
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyWithoutModuleInput>
  }

  export type menuCreateWithoutPermissionInput = {
    menu_name?: string | null
    url?: string | null
    element?: string | null
    module?: moduleCreateNestedOneWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutPermissionInput = {
    id?: number
    module_id?: number | null
    menu_name?: string | null
    url?: string | null
    element?: string | null
  }

  export type menuCreateOrConnectWithoutPermissionInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutPermissionInput, menuUncheckedCreateWithoutPermissionInput>
  }

  export type moduleCreateWithoutPermissionInput = {
    module_name?: string | null
    url?: string | null
    element?: string | null
    menu?: menuCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateWithoutPermissionInput = {
    id?: number
    module_name?: string | null
    url?: string | null
    element?: string | null
    menu?: menuUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutPermissionInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutPermissionInput, moduleUncheckedCreateWithoutPermissionInput>
  }

  export type roleCreateWithoutPermissionInput = {
    role_name: string
    user?: userCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutPermissionInput = {
    id?: number
    role_name: string
    user?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutPermissionInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutPermissionInput, roleUncheckedCreateWithoutPermissionInput>
  }

  export type menuUpsertWithoutPermissionInput = {
    update: XOR<menuUpdateWithoutPermissionInput, menuUncheckedUpdateWithoutPermissionInput>
    create: XOR<menuCreateWithoutPermissionInput, menuUncheckedCreateWithoutPermissionInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutPermissionInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutPermissionInput, menuUncheckedUpdateWithoutPermissionInput>
  }

  export type menuUpdateWithoutPermissionInput = {
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    module?: moduleUpdateOneWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type moduleUpsertWithoutPermissionInput = {
    update: XOR<moduleUpdateWithoutPermissionInput, moduleUncheckedUpdateWithoutPermissionInput>
    create: XOR<moduleCreateWithoutPermissionInput, moduleUncheckedCreateWithoutPermissionInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutPermissionInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutPermissionInput, moduleUncheckedUpdateWithoutPermissionInput>
  }

  export type moduleUpdateWithoutPermissionInput = {
    module_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: menuUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: menuUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type roleUpsertWithoutPermissionInput = {
    update: XOR<roleUpdateWithoutPermissionInput, roleUncheckedUpdateWithoutPermissionInput>
    create: XOR<roleCreateWithoutPermissionInput, roleUncheckedCreateWithoutPermissionInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutPermissionInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutPermissionInput, roleUncheckedUpdateWithoutPermissionInput>
  }

  export type roleUpdateWithoutPermissionInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    user?: userUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    user?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type permissionCreateWithoutRoleInput = {
    menu?: menuCreateNestedOneWithoutPermissionInput
    module?: moduleCreateNestedOneWithoutPermissionInput
  }

  export type permissionUncheckedCreateWithoutRoleInput = {
    id?: number
    module_id?: number | null
    menu_id?: number | null
  }

  export type permissionCreateOrConnectWithoutRoleInput = {
    where: permissionWhereUniqueInput
    create: XOR<permissionCreateWithoutRoleInput, permissionUncheckedCreateWithoutRoleInput>
  }

  export type permissionCreateManyRoleInputEnvelope = {
    data: permissionCreateManyRoleInput | permissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutRoleInput = {
    name?: string | null
    password: string
    is_loggedIn?: boolean
  }

  export type userUncheckedCreateWithoutRoleInput = {
    id?: number
    name?: string | null
    password: string
    is_loggedIn?: boolean
  }

  export type userCreateOrConnectWithoutRoleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userCreateManyRoleInputEnvelope = {
    data: userCreateManyRoleInput | userCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type permissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: permissionWhereUniqueInput
    update: XOR<permissionUpdateWithoutRoleInput, permissionUncheckedUpdateWithoutRoleInput>
    create: XOR<permissionCreateWithoutRoleInput, permissionUncheckedCreateWithoutRoleInput>
  }

  export type permissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: permissionWhereUniqueInput
    data: XOR<permissionUpdateWithoutRoleInput, permissionUncheckedUpdateWithoutRoleInput>
  }

  export type permissionUpdateManyWithWhereWithoutRoleInput = {
    where: permissionScalarWhereInput
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type userUpsertWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userUpdateWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
  }

  export type userUpdateManyWithWhereWithoutRoleInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutRoleInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    is_loggedIn?: BoolFilter<"user"> | boolean
    role_id?: IntFilter<"user"> | number
  }

  export type roleCreateWithoutUserInput = {
    role_name: string
    permission?: permissionCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutUserInput = {
    id?: number
    role_name: string
    permission?: permissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutUserInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
  }

  export type roleUpsertWithoutUserInput = {
    update: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUserInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>
  }

  export type roleUpdateWithoutUserInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    permission?: permissionUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    permission?: permissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type permissionCreateManyMenuInput = {
    id?: number
    role_id: number
    module_id?: number | null
  }

  export type permissionUpdateWithoutMenuInput = {
    module?: moduleUpdateOneWithoutPermissionNestedInput
    role?: roleUpdateOneRequiredWithoutPermissionNestedInput
  }

  export type permissionUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type permissionUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type menuCreateManyModuleInput = {
    id?: number
    menu_name?: string | null
    url?: string | null
    element?: string | null
  }

  export type permissionCreateManyModuleInput = {
    id?: number
    role_id: number
    menu_id?: number | null
  }

  export type menuUpdateWithoutModuleInput = {
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: permissionUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: permissionUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateManyWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type permissionUpdateWithoutModuleInput = {
    menu?: menuUpdateOneWithoutPermissionNestedInput
    role?: roleUpdateOneRequiredWithoutPermissionNestedInput
  }

  export type permissionUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type permissionUncheckedUpdateManyWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type permissionCreateManyRoleInput = {
    id?: number
    module_id?: number | null
    menu_id?: number | null
  }

  export type userCreateManyRoleInput = {
    id?: number
    name?: string | null
    password: string
    is_loggedIn?: boolean
  }

  export type permissionUpdateWithoutRoleInput = {
    menu?: menuUpdateOneWithoutPermissionNestedInput
    module?: moduleUpdateOneWithoutPermissionNestedInput
  }

  export type permissionUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type permissionUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userUpdateWithoutRoleInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    is_loggedIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    is_loggedIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    is_loggedIn?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}