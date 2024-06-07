  <!-- <template>
  <div class="shadow px-40 py-32 text-[#282938] font-poppins">
    <div class="container block items-center">
      <div class="top space-y-4 mx-40">
        <h1 class="font-semibold text-5xl text-center">
          A UX Case Study on Creating a Studious Environment for Students
        </h1>
        <p class="font-medium text-base text-center">
          Andrew Jonson Posted on 27th January 2021
        </p>
      </div>
      <img class="pr-10 mt-8" src="../../../public/img/blogPeople.png" alt="" />
      <div class="buttom mt-12 mx-56 space-y-4  justify-center">
        <p class="text-base font-normal text-center">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>
        <a class="text-[blue] flex justify-center" href="../components/blog/part2.vue">Read more</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style> 
 -->


 <template>
  <div class="shadow md:px-40 py-32 text-[#282938] font-poppins">
    <div class="container md:block items-center">
      <div class="top space-y-4 md:mx-40">
        <h1 class="font-semibold text-5xl text-center">
          A UX Case Study on Creating a Studious Environment for Students
        </h1>
        <p class="font-medium text-base text-center">
          Andrew Jonson Posted on 27th January 2021
        </p>
      </div>
      <img class="pr-10 mt-8" src="../../../public/img/blogPeople.png" alt="" />
      <div class="buttom mt-12 mx-56 space-y-4  justify-center">
        <p class="text-base font-normal text-center">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>
        <a class="text-[blue] flex justify-center" href="../components/blog/part2.vue">Read more</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .top, .buttom {
    margin-left: 20px;
    margin-right: 20px;
  }

  .mx-40 {
    margin-left: 0;
    margin-right: 0;
  }

  .mx-56 {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
