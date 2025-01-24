import { MetaProvider, Title } from "@solidjs/meta";

const Interests = () => {
  return (
    <main>
      <MetaProvider>
        <Title>Workspace | wm.sci</Title>
      </MetaProvider>
      <div class="mt-28 pb-32 md:pb-0">
        <div class="container mx-auto max-w-7xl z-20">
          <div class="mx-4">
            <h2 class="text-3xl mb-4 font-semibold font-futura">Workspace</h2>
            <h3 class="text-2xl font-semibold">作業環境</h3>
            <p class="my-4">現在（2024年11月時点）の作業環境です。</p>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">MacBook Pro, 14インチ, 2021</h4>
              <table class="table-auto my-4">
                <tbody>
                  <tr>
                    <th class="border px-4 py-2">CPU</th>
                    <td class="border px-4 py-2">Apple M1 Pro</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">メモリ</th>
                    <td class="border px-4 py-2">32GB</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">ストレージ</th>
                    <td class="border px-4 py-2">1TB</td>
                  </tr>
                </tbody>
              </table>
              <p>学校用に購入しました。最近のメインはこれ。</p>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">DELL Latitude 5320</h4>
              <table class="table-auto my-4">
                <tbody>
                  <tr>
                    <th class="border px-4 py-2">CPU</th>
                    <td class="border px-4 py-2">Intel Core i7-1185G7</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">メモリ</th>
                    <td class="border px-4 py-2">DDR4-3200 16GB</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">ストレージ</th>
                    <td class="border px-4 py-2">256GB NVMe SSD</td>
                  </tr>
                </tbody>
              </table>
              <p>しょーもない用途のためのWindowsマシン。28000円ぐらい。</p>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">自作PC (1)</h4>
              <table class="table-auto my-4">
                <tbody>
                  <tr>
                    <th class="border px-4 py-2">CPU</th>
                    <td class="border px-4 py-2">Intel Core i5-14400F</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">GPU</th>
                    <td class="border px-4 py-2">NVIDIA GeForce 1660 Ti</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">メモリ</th>
                    <td class="border px-4 py-2">DDR4-3200 32GB</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">ストレージ</th>
                    <td class="border px-4 py-2">1TB NVMe SSD<br/>512GB NVMe SSD<br/>2TB HDD<br/>1TB HDD</td>
                  </tr>
                </tbody>
              </table>
              <p>
                旧メイン。動画編集とかするときはこれを使う。
              </p>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">自作PC (2)</h4>
              <table class="table-auto my-4">
                <tbody>
                  <tr>
                    <th class="border px-4 py-2">CPU</th>
                    <td class="border px-4 py-2">Intel Core i7-4770K</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">メモリ</th>
                    <td class="border px-4 py-2">DDR3-1600 32GB</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">ストレージ</th>
                    <td class="border px-4 py-2">
                      512GB NVMe SSD
                      <br />
                      500GB HDD
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>旧サーバー。自宅鯖で使っていたが停電によりSSD破損。</p>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">NEC Express5800 / R120f-1E</h4>
              <table class="table-auto my-4">
                <tbody>
                  <tr>
                    <th class="border px-4 py-2">CPU</th>
                    <td class="border px-4 py-2">Intel Xeon E5-2630 V3</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">メモリ</th>
                    <td class="border px-4 py-2">DDR4-2133 128GB</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">ストレージ</th>
                    <td class="border px-4 py-2">2TB HDD</td>
                  </tr>
                </tbody>
              </table>
              <p>メインサーバー。ヤフオクで12000円程度で落札した。</p>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">ARROWS Tab Q736/P</h4>
              <table class="table-auto my-4">
                <tbody>
                  <tr>
                    <th class="border px-4 py-2">CPU</th>
                    <td class="border px-4 py-2">Intel Core i5-6300U</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">メモリ</th>
                    <td class="border px-4 py-2">4GB</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">ストレージ</th>
                    <td class="border px-4 py-2">128GB SSD</td>
                  </tr>
                </tbody>
              </table>
              <p>用途なし。一応それなりに動く。クレードル付き。</p>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">PC-9801NS/T</h4>
              <table class="table-auto my-4">
                <tbody>
                  <tr>
                    <th class="border px-4 py-2">CPU</th>
                    <td class="border px-4 py-2">Intel i386SL</td>
                  </tr>
                  <tr>
                    <th class="border px-4 py-2">メモリ</th>
                    <td class="border px-4 py-2">1.6MB + 8MB + 6MB</td>
                  </tr>
                </tbody>
              </table>
              <p>ドフで買ったが動かない。液漏れ。漬物石。</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Interests;
