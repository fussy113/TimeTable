import path from 'path'

module.exports =
{
  alias: {
  // alias package names
  // 'react': '@pika/react',
  // 'react-dom': '@pika/react-dom'
  // alias a path to a fs directory
  // the key must start and end with a slash
    '/@/': path.join(__dirname, 'src/'),
    '/@components/': path.join(__dirname, 'src/components/'),
    '/@styles/': path.join(__dirname, 'src/assets/styles/'),
    '/@images/': path.join(__dirname, 'src/assets/images/')
  }
}