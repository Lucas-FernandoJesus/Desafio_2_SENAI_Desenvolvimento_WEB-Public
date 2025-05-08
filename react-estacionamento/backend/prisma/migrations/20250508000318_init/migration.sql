-- CreateTable
CREATE TABLE "Veiculo" (
    "id" SERIAL NOT NULL,
    "proprietario" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("id")
);
