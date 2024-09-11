export default function catchErrors(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    try {
      return await method.apply(this, args);
    } catch (error) {
      const err = error as Error;
      return {
        ok: false,
        status: 500,
        data: {
          message: 'Internal Server Error',
          error: err.message
        }
      };
    }
  };

  return descriptor;
}