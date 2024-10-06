import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const jsonFilePath = path.join(
  process.cwd(),
  "public",
  "data",
  "transactions.json"
);

function readData() {
  const data = fs.readFileSync(jsonFilePath, "utf8");
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}

export async function POST(req) {
  const data = readData();
  const body = await req.json();

  const newTransaction = {
    id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
    ...body,
    date: new Date().toISOString(),
  };

  data.push(newTransaction);
  writeData(data);
  return NextResponse.json(newTransaction, { status: 201 });
}

export async function PUT(req) {
  const data = readData();
  const body = await req.json();

  const index = data.findIndex((transaction) => transaction.id === body.id);

  if (index !== -1) {
    data[index] = { ...data[index], ...body };
    writeData(data);
    return NextResponse.json(data[index], { status: 200 });
  } else {
    return NextResponse.json(
      { error: "Transação não encontrada!" },
      { status: 404 }
    );
  }
}

export async function DELETE(req) {
  const data = readData();
  const body = await req.json();

  const updatedData = data.filter(
    (transaction) => !body.ids.includes(transaction.id)
  );

  if (updatedData.length === data.length) {
    return NextResponse.json(
      { error: "Nenhuma transação encontrada para deletar!" },
      { status: 404 }
    );
  }

  writeData(updatedData);
  return NextResponse.json(
    { success: true, message: "Transações deletadas com sucesso!" },
    { status: 200 }
  );
}
