const db = require('../config/db')

exports.getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products ORDER BY id ASC')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message })
  }
}

exports.getProductById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id])

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }

    res.json(rows[0])
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produto', error: error.message })
  }
}

exports.createProduct = async (req, res) => {
  try {
    const { name, price, tag, image } = req.body

    if (!name || !price || !image) {
      return res.status(400).json({ message: 'Nome, preço e imagem são obrigatórios' })
    }

    const [result] = await db.query(
      'INSERT INTO products (name, price, tag, image) VALUES (?, ?, ?, ?)',
      [name, price, tag || '', image]
    )

    const [newProduct] = await db.query('SELECT * FROM products WHERE id = ?', [result.insertId])

    res.status(201).json(newProduct[0])
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto', error: error.message })
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const { name, price, tag, image } = req.body

    const [existing] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id])

    if (existing.length === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }

    await db.query(
      'UPDATE products SET name = ?, price = ?, tag = ?, image = ? WHERE id = ?',
      [name, price, tag || '', image, req.params.id]
    )

    const [updatedProduct] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id])

    res.json(updatedProduct[0])
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message })
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    const [existing] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id])

    if (existing.length === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }

    await db.query('DELETE FROM products WHERE id = ?', [req.params.id])

    res.json({ message: 'Produto removido com sucesso' })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover produto', error: error.message })
  }
}