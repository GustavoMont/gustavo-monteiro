type ConstructorParams = Partial<{
  cause: unknown;
  message: string;
  action: string;
}>;

export class NotFoundError extends Error {
  statusCode: number = 404;
  action: string;

  constructor({ message, action, cause }: ConstructorParams) {
    super(message || "Recurso não encontrado no sistema.", { cause });
    this.action = action || "Verifique se os dados de consulta estão corretos.";
    this.name = "NotFoundError";
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
